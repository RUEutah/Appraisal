module.exports = {
 
    development: {
      client: 'mssql',
      connection: {
        server : 'localhost',
        user : 'sa',
        password : 'password',
        database : 'performanceappraisal',
        options: {
          port: 1433
        }
      },
      pool: {
        min: 2,
        max: 10,
      },
     
    }
   
  };
  