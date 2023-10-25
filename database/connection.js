import mysql from 'mysql'

async function connect() {
    const db = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'teamInterval',
    });
    console.log("Database Connected");
    return db;
}

export default connect;