async function createAnswers(req, res){
    const {answer, respondentsId, questionId,formId} = req.body;
 
    await knex('answers')
    .insert(
     {
     answer : answer,
     respondentsId : respondentsId,
     questionId : questionId,
     formId: formId
     })
 
    res.send("answer added successfuly");
 }
 
 async function getAnswers(req, res){
     const r = await knex('answers').select()
 
     res.json(r);
 
 }
 
 async function deleteAnswers(req, res){
     const {answerId} = req.body;
 
     await knex('answers')
       .where({ answerId: answerId })
       .del();
 
     res.send(answerId + " deleted successfully");
 
 }
 
 async function updateAnswers(req, res){
     const {answerId, respondentsId, answer, questionId} = req.body;
 
     const r = await knex('answers')
       .where({ answerId: answerId })
       .update(
         {
           respondentsId: respondentsId,
           answer : answer
         })
 
     res.send(answerId + " updated successfully");
 
 }
 
 module.exports = {
     createAnswers,
     getAnswers,
     deleteAnswers,
     updateAnswers 
 }
 
 