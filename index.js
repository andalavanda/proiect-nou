import { format } from "date-fns";

const date = format(new Date(2014, 1, 11), "yyyy-MM-dd");

console.log(date);

//npm init -y =>
//npm install / i date-fns
//add in package.json: "type": "module",
//in terminal type 'nodemon'
