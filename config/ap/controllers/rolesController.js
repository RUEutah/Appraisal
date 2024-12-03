async function createRoles(req, res){
  try{
    const {roleId, roleName, createdAt} = req.body;
 
    await knex('roles')
    .insert(
     {
     roleName: roleName,
     createdAt: createdAt
     })
 
    return res.status(200).json({ message: 'Role added successfully' });
  }catch(ex){
      return res.status(500).json({ message: 'internal server error' });
  }
    
 }
 
 async function getRoles(req, res){
     const r = await knex('roles').select()
 
     res.json(r);
 
 }
 
 async function deleteRoles(req, res){ 
     const {roleId} = req.body;
 
     await knex('roles')
       .where({ roleId: roleId })
       .del();
 
     res.send(roleId + " deleted successfully");
 
 }
 
 async function updateRoles(req, res){
     const {roleId, roleName, createdAt} = req.body;
 
     const r = await knex('roles')
       .where({ roleId: roleId })
       .update(
         {
           roleName: roleName,
            createdAt: createdAt
         })
 
     res.send(roleId + " updated successfully");
 
 }
 
 module.exports = {
     createRoles,
     getRoles,
     deleteRoles,
     updateRoles 
 }
 
 