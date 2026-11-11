import swaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        version: "v0.0.1",
        title: "Purelib API Documentation",
        description: "Purelib API Documentation"
    },
    servers: [
        {
            url: "http://127.0.0.1:5001/api",
            description: "Local Server"
        },
        {
            url: "https://purelib-backend.vercel.app/api",
            description: "Deploy Server"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer"
            }
        },
        schemas: {
            LoginRequest: {
                identifier: "yusufridlo16",
                password: "12345678"
            },
            RegisterRequest: {
                "fullName": "Lucky Candra",
                "username": "lucky2015",
                "email": "lucky2015@yopmail.com",
                "password": "Lucky2015",
                "confirmPassword": "Lucky2015"
            },
            ActivationRequest: {
                code: '1234'
            }
        }
    }
}

const outputFile = "./swagger_output.json"
const endpointFiles = ["../routes/api.js"]

swaggerAutogen({openapi: "3.0.0"})(outputFile, endpointFiles, doc)