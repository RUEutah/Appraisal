async function createRespondents(req, res){
    try{
        const {respondentsId, userId, sessionId , createdAt, employeeSignature, employeeSignatureDate, appraiserSignature, appraiserSignatureDate, managerSignature, managerSignatureDate, lengthOfService, status} = req.body;
 
        await knex('respondents')
        .insert(
         { 
            userId: userId, 
            sessionId: sessionId, 
            createdAt: createdAt, 
            employeeSignature: employeeSignature, 
            employeeSignatureDate: employeeSignatureDate, 
            appraiserSignature: appraiserSignature, 
            appraiserSignatureDate: appraiserSignatureDate, 
            managerSignature: managerSignature, 
            managerSignatureDate: managerSignatureDate, 
            lengthOfService: lengthOfService, 
            status: status
         })
     
         return res.status(200).json({ message: 'Respondent added successfully' });
        }catch(ex){
            return res.status(500).json({ message: 'internal server error' });
        }
 }
 
 async function getRespondents(req, res){
    try{
        const r = await knex('respondents')
        .leftJoin('users', 'respondents.userId', 'users.userId')
        .select('firstName', 'lastName', 'email', 'respondents.respondentsId', 'respondents.userId', 'respondents.createdAt')


        console.log(r);
        return res.status(200).json({data:r});
        
    }catch(ex){
        console.log(ex)
            return res.status(500).json({ message: 'internal server error' });
        }
     
 
 }
 
 async function deleteRespondents(req, res){
    try{
        const {respondentsId} = req.body;
 
        await knex('respondents')
          .where({ respondentsId: respondentsId })
          .del();
    
          return res.status(200).json({ message: 'Respondent deleted successfully' });
        }catch(ex){
            return res.status(500).json({ message: 'internal server error' });
        }
     
 
 }
 
 async function updateRespondents(req, res){
    try{
        const {respondentsId, userId, sessionId , createdAt, employeeSignature, employeeSignatureDate, appraiserSignature, appraiserSignatureDate, managerSignature, managerSignatureDate, lengthOfService, status} = req.body;
 
        const r = await knex('respondents')
        .where({ respondentsId: respondentsId })
        .update(
            {
                userId: userId, 
                sessionId: sessionId, 
                createdAt: createdAt, 
                employeeSignature: employeeSignature, 
                employeeSignatureDate: employeeSignatureDate, 
                appraiserSignature: appraiserSignature, 
                appraiserSignatureDate: appraiserSignatureDate, 
                managerSignature: managerSignature, 
                managerSignatureDate: managerSignatureDate, 
                lengthOfService: lengthOfService, 
                status: status
            })
    
            return res.status(200).json({ message: 'User updated successfully' });
        }catch(ex){
            return res.status(500).json({ message: 'internal server error' });        
    }
 
 }
  
 //join with users 
 //session id=

 module.exports = {
     createRespondents,
     getRespondents,
     deleteRespondents,
     updateRespondents 
 }
 
 