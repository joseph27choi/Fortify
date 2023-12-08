const swaggerAutogen = require("swagger-autogen")();

const options = {
  info: {
    title: "Documentation",
    description: "API Documentation",
  },
  servers: [
    {
      url: "http://localhost:8080",
    },
  ],
  schemes: ["http"],
  securityDefinitions: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      in: "header",
      bearerFormat: "JWT",
    },
  },
};

const outputFile = "./swagger-output.json"; // where you make your api doc
const endpointsFiles = ["../../server.js"]; // just direct this to your root file
swaggerAutogen(outputFile, endpointsFiles, options);