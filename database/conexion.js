const mongoose = require("mongoose");

const connection =  async () => {
   
   try {
      await mongoose.connect("mongodb+srv://angedpb25:LtXRUWKPcna21BZ5@gymaccess.rdetr.mongodb.net/?retryWrites=true&w=majority&appName=GymAccess");
      // await mongoose.connect("mongodb://mongo:BDGcuOFbMjlHeEJyQxcjcayzyhGeNCiP@mongodb.railway.internal:27017/GymAccess");
      console.log("Conectado a BDD a Gym Access");
   } catch (error) {
      console.log( "No se ha podido conectar correctamente a la BBD Gym Access");
   }
}

module.exports = connection