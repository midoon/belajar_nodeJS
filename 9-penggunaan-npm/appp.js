const validator = require("validator");
const chalk = require("chalk");

//cek email
console.log(chalk.blueBright(validator.isEmail("harun@gmail.com")));

//cek nomor id
console.log(chalk.greenBright(validator.isMobilePhone("088217017537", "id-ID")));

console.log("uwu");
