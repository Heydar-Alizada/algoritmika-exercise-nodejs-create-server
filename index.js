const fs = require('fs')
const express = require('express');
const app = express();
                                                                                                                                                              


app.get('/', (request, response) => {
    fs.readFile('./data.json', 'utf8', (err, data) =>  {
     response.send(data)                                                                    
    })                                                                        
 })


app.listen(3010, () => {
    fs.readFile('./data.json', 'utf8', (err, data) =>  {
        console.log(JSON.parse(data))                                                                    
       })    
})