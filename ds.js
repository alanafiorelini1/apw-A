import mysql from 'mysql2'

async function conn() {
    try {
        const connection = await mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'escola'
        })
        return connection
        
    } catch (error) {
        console.error('Não conectou')
        throw error
        }

    } 

export default conn