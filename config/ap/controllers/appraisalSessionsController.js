const fs = require('fs')
const path = require('path');

async function createAppraisalSessions(req, res){
    try{
        const {formId, createdAt, dueDate, createdBy, appraisalPeriod, dateOfAppraisal, dateOfNextAppraisal} = req.body;
        await knex('appraisal_sessions')
        .insert(
            {
                formId: formId ,
                createdAt: createdAt,
                dueDate : dueDate,
                createdBy : createdBy,
                appraisalPeriod : appraisalPeriod,
                dateOfAppraisal : dateOfAppraisal,
                dateOfNextAppraisal : dateOfNextAppraisal 
            })
            return res.status(200).json({ message: 'Session added successfully' });
        }catch(ex){
            return res.status(500).json({ message: 'internal server error' });
        }    
    
 }
 
 async function getAppraisalSessions(req, res){
    
     try{
        const r = await knex('appraisal_sessions')
        .leftJoin('appraisal_forms', 'appraisal_sessions.formId', 'appraisal_forms.formId')
        .select('appraisal_sessions.formId','appraisal_sessions.sessionId', 'formName', 'description', 'dueDate', 'appraisalPeriod')
        .orderBy('sessionId', 'desc')

       console.log(r);
       
       return res.status(200).json({data: r});
    }catch(ex){
        console.log(ex)
        return res.status(500).json({ message: 'internal server error' });
    }
 }

 async function getAppraisalSession(req, res){
    
    try{
        const id = req.params.id;
        const r = await knex('appraisal_sessions')
        .select('appraisal_sessions.formId', 'dueDate')
        .where({sessionId: id})

        if(r.length < 1){
            return res.status(200).json({data: null});
        }

        const t = r[0];

        const questions = JSON.parse(fs.readFileSync(path.join(__dirname, `../${t.formId}.json`)));
      
      return res.status(200).json({data: {session: t, questions}});
   }catch(ex){
       console.log(ex)
       return res.status(500).json({ message: 'internal server error' });
   }
}
 
 async function deleteAppraisalSessions(req, res){
     const {sessionId} = req.body;
 
     await knex('appraisal_sessions')
       .where({ sessionId: sessionId })
       .del();
 
     res.send(sessionId + " deleted successfully");
 
 }
 
 async function updateAppraisalSessions(req, res){
     const {sessionId, formId, createdAt, dueDate, createdBy, appraisalPeriod, dateOfAppraisal, dateOfNextAppraisal} = req.body;
 
     const r = await knex('appraisal_forms')
       .where({ sessionId: sessionId })
       .update(
         {
            formId: formId,
            createdAt: createdAt,
            dueDate : dueDate,
            createdBy : createdBy,
            appraisalPeriod : appraisalPeriod,
            dateOfAppraisal : dateOfAppraisal,
            dateOfNextAppraisal : dateOfNextAppraisal
         })
         
          
 
     res.send(sessionId + " updated successfully");
 
 }
 
 module.exports = {
     createAppraisalSessions,
     getAppraisalSessions,
     deleteAppraisalSessions,
     updateAppraisalSessions,
     getAppraisalSession
       
 }
 
 