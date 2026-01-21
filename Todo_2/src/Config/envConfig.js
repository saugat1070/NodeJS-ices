process.loadEnvFile(".env");


const Env = {
    dbUrl : process.env.DB_URL,
    portNumber : process.env.PORT_NUMBER,
    jwtSecret : process.env.JWT_SECRET_TOKEN,
    google_client_id : process.env.GOOGLE_CLIENT_ID,
    google_secret_client_id : process.env.GOOGLE_CLIENT_SECRET,
    google_redirect_uri : process.env.google_redirect_uri
}

export default Env;