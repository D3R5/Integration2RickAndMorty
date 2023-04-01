require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/", router);

server.listen(PORT, () => {
    console.log(`Escuchando el port: ${PORT}`);
});



// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// const getCharDetail = require("./controllers/getCharDetail");
// // borre el data.js const characters = require("./utils/data");

// http.createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const id = req.url.split("/").pop(); //para obtener el id
//     if(req.url.includes("onsearch")){
//         getCharById(res, id);
//     }
//     if(req.url.includes("detail")){
//         const id = req.url.split("/").pop();
//         getCharDetail(res,id);

//     }


// }).listen(3001,"localhost");

//    // if(req.url.includes("rickandmorty/character")){
//     //     const id = req.url.split("/").pop();
//     //     // const id = req.url.split("/")[3];
//     //     // const id = req.url.split("/").at(-1);
//     //     const character = characters.filter((char) => char.id === Number(id));
//     //     res.writeHead(200, {"Content-type" : "application/json"});
//     //     return res.end(JSON.stringify(character[0]));
//     // }

//     // res.writeHead(404); 
//     // res.end()