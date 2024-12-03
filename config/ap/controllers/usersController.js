const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function createUsers(req, res){
    try{
    const { firstName, lastName, email, roleId, departmentId} = req.body;

    if(!firstName && !lastName && !email){
        return res.status(400).json({ message: 'Some required fields are missing!' });
    }

    let password = `${firstName.charAt(0)}${lastName}`;
    password = bcrypt.hashSync(password?.toLocaleLowerCase()?.trim(), process.env.bcrypt_salt);

    await knex('users')
    .insert(
     {
        firstName: firstName, 
        lastName: lastName, 
        email: email, 
        roleId: roleId, 
        departmentId: departmentId,
        password: password
     })
 
     return res.status(200).json({ message: 'User added successfully' });
    }catch(ex){
        console.log(ex);
        return res.status(500).json({ message: 'internal server error' });
    }
 }
 
 async function getUsers(req, res){
    try{
         
        const r = await knex('users')
        .leftJoin('roles', 'users.roleId', 'roles.roleId')
        .leftJoin('departments', 'users.departmentId', 'departments.departmentId')
        .select('firstName', 'lastName', 'email', 'users.userId', 'departmentName', 'roleName', 'users.roleId', 'users.departmentId')


        console.log(r);

        return res.status(200).json({data:r});
    }catch(ex){
        console.log(ex)
            return res.status(500).json({ message: 'internal server error' });
        }
}

 
 async function deleteUsers(req, res){ 
    try{
     const {userId} = req.body;
 
     await knex('users')
       .where({ userId: userId })
       .del();
 
    return res.status(200).json({ message: 'User deleted successfully' });
    }catch(ex){
        return res.status(500).json({ message: 'internal server error' });    }
 }
 
 async function updateUsers(req, res){
    try{
        const {userId, firstName, lastName, email, roleId, departmentId, password} = req.body;
 
     const r = await knex('users')
       .where({ roleId: roleId })
       .update(
         {
            firstName: firstName, 
            lastName: lastName, 
            email: email, 
            roleId: roleId, 
            departmentId: departmentId, 
            password: password
         })
 
     return res.status(200).json({ message: 'User updated successfully' });
    }catch(ex){
        return res.status(500).json({ message: 'internal server error' });
    }
     
 
 }

 //register
 async function register(req, res) {
    try{
        const { firstName, lastName, email, roleId, departmentId, password } = req.body;

        const user = await knex('users').where({ email}).first();

        if(user.length > 0){
            return res.status(400).send('user already exists');
        }

        const hashedPassword = await bcrypt.hashSync(password, process.env.bcrypt_salt);
        const r = await knex('users').insert({
            firstName,
            lastName,
            email,
            roleId,
            departmentId,
            password:hashedPassword
        }).catch((err) => {
            return res.status(500).json({ message: 'Internal server error' });
        });

        
    }catch(err){
        return res.status(500).send(err);
    }
 }
 
 //login 
 async function login(req, res) {
    try {
        const { email, password } = req.body;//req.params.id
        if (!email || !password) {
            return res.status(400).json({ message: 'Both email and password are required.' });
        }

        const hashedPassword = bcrypt.hashSync(password, process.env.bcrypt_salt);
        const user = await knex('users').where({ email}).where("password", hashedPassword)
        console.log(user);

        if (user.length > 0) {
            const token = jwt.sign( user[0], process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ token, user, message: 'Login successful' });
        } else {
            return res.status(401).json({ message: 'Incorrect email or password.' });
        }
    } catch (error) {
      return res.status(500).json({ message: `An error occurred while logging in.${error}` });
    }
  }
 //resetpassword
 async function resetPassword(req, res) {
    try {
        const { email, newPassword } = req.body;
        if (!email || !newPassword) {
            return res.status(400).json({ message: 'Both email and password are required.' });
            }
            const user = await knex('users').where({ email: email }).first();
            if (user) {
                const hashedPassword = bcrypt.hashSync(newPassword, process.env.bcrypt_salt);
                await knex('users').where({ id: user.id }).update({ hashedPassword: hashedPassword
                    });
                }
                return res.status(200).json({ message: 'Password reset successfully.' });
                } catch (error) {
                    return res.status(500).json({ message: 'An error occurred while resetting password.' });
                }
 }

 //changepassword
 async function changePassword(req,res){
    try{
        const {oldpassword,newpassword} = req.body;
        const user = await knex('users').where({ id: req.user.id }).first();
        const isValid = bcrypt.compareSync(oldpassword, user[0].password );

        if (!isValid) {
            return res.status(401).json({ message: 'Incorrect old password.' });
        }

        const hashedPassword = bcrypt.hashSync(newpassword, process.env.bcrypt_salt);
        await knex('users').where({ id: req.user.id }).update({password: hashedPassword });
        return res.status(200).json({ message: 'Password changed successfully.' });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred while changing password.' });
    }
    
 }

 async function totalEmployees(req, res) {
    try {
        const users = await knex('users').count()
        const appraisals = await knex('appraisal_sessions').count()
        const activeappraisals = await knex('appraisal_sessions').where('status', 'active').count();
        const inactiveappraisals = await knex('appraisal_sessions').where('status', 'false').count();
        
        return res.status(200).json({users,activeappraisals, appraisals,inactiveappraisals});

    }catch(ex){
        console.log(ex)
            return res.status(500).json({ message: 'internal server error' });
        }
  }

 module.exports = {
     createUsers,
     getUsers,
     deleteUsers,
     updateUsers ,
     login,
     register,
     changePassword,
     resetPassword,
     totalEmployees
 }
 
