import Env from "./Config/envConfig.js";
import { app } from "./main.js";



function ServerRunner(){
    app.listen(Env.portNumber || 3000,()=>{
    console.log("Server Running at port:",Env.portNumber);
});
}

ServerRunner();