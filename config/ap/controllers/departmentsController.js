async function createDepartments(req, res){
    const {departmentId, departmentName, createdAt} = req.body;
 
    await knex('departments')
    .insert(
     {
     departmentName : departmentName,
     createdAt : createdAt
     })
 
    res.send(departmentId + " added successfuly");
 }
 
 async function getDepartments(req, res){
     const r = await knex('departments').select()
 
     res.json(r);
 
 }
 
 async function deleteDepartments(req, res){
     const {departmentId} = req.body;
 
     await knex('departments')
       .where({ departmentId: departmentId })
       .del();
 
     res.send(departmentId + " deleted successfully");
 
 }
 
 async function updateDepartments(req, res){
     const {departmentId,  departmentName, createdAt} = req.body;
 
     const r = await knex('departments')
       .where({ departmentId: departmentId })
       .update(
         {
           departmentName: departmentName,
           createdAt: createdAt
         })
 
     res.send(departmentId + " updated successfully");
 
 }
  
 module.exports = {
     createDepartments,
     getDepartments,
     deleteDepartments,
     updateDepartments 
 }
 
 