process.loadEnvFile(".env");


const Env = {
    dbUrl : process.env.DB_URL,
    portNumber : process.env.PORT_NUMBER,
    jwtSecret : process.env.JWT_SECRET_TOKEN
}

export default Env;