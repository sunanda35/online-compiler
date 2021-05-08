var axios = require('axios')
require('dotenv').config()


// var programCompile = {
//     script : "",
//     language: "php",
//     versionIndex: "0",
//     clientId: process.env.CLIENT_ID,
//     clientSecret:process.env.CLIENT_SECRET
// }
async function compileCall(code, codeLanguage){
   return await axios.post('https://api.jdoodle.com/v1/execute', {
        script : code,
        language: codeLanguage,
        versionIndex: "0",
        clientId: process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET
    }).then(function (response) {
    console.log(response);
        
  })
  .catch(function (error) {
    console.log(error);
  });
}
module.exports = compileCall;