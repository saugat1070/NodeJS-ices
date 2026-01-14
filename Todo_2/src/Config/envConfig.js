process.loadEnvFile(".env");


const Env = {
    dbUrl : process.env.DB_URL,
    portNumber : process.env.PORT_NUMBER
}

export default Env;