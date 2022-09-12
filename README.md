# Node Ajv.js tutorial

This tutorial demonstrates how to use the [Ajv.js JSON schema validator library](https://ajv.js.org) to validate incoming request payloads by making use of the cross-platform [JSON-Schema](https://json-schema.org/)

<h3 align="center">Please help this repo with a ⭐️ if you find it useful! 😁</h3>

This repository is contains the code for the [Node Ajv.js video tutorial](https://www.youtube.com/watch?v=9Pc8LGN4uug)

[![Node Ajv JSON schema validation tutorial](images/ajv-json-schema-validation.png)](https://www.youtube.com/watch?v=9Pc8LGN4uug)

Please also check out my website at [jangoebel.com](https://jangoebel.com)

## Running this project

1. `npm i`
2. `npm run dev` starts up a hot-reload express webserver on port 8080

Sample Json request:
     {   
        "name": {
        	"firstName":"vign",
        	"lastName":"123"
        },
        "dependents":{
        "dep1": {
        	"firstName":"vign",
        	"lastName":"123"
        },  
        "dep2": {
        	"firstName":"vign",
        	"lastName":"123"
        }
        },
        "email": "12@gmail.com",
        "dob": "01-09-1999",
        "countryCode": "CA"
     }
