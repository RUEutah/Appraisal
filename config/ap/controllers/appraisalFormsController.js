async function createAppraisalForms(req, res){
    const {formName, description} = req.body;
 
    await knex('appraisal_forms')
    .insert(
     {
     formName: formName,
     description: description
     })
 
    res.send(formName + " added successfuly");
 }
 
 async function getAppraisalForms(req, res){
     const r = await knex('appraisal_forms').select()
 
     res.json(r);
 
 }
 
 async function deleteAppraisalForms(req, res){
     const {formId} = req.body;
 
     await knex('appraisal_forms')
       .where({ formId: formId })
       .del();
 
     res.send(formId + " deleted successfully");
 
 }
 
 async function updateAppraisalForms(req, res){
     const {formId, formName, description} = req.body;
 
     const r = await knex('appraisal_forms')
       .where({ formId: formId })
       .update(
         {
          formName: formName
         })
         
          
 
     res.send(formId + " updated successfully");
 
 }
 
 module.exports = {
     createAppraisalForms,
     getAppraisalForms,
     deleteAppraisalForms,
     updateAppraisalForms
       
 }
 
 