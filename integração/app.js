import  connection  from './ds.js'

//Create, read, update e delete - as açoes no BD
class Crud {

    //Método para inserir
    async inserir(n,i){
        const con = await connection()
        let sql = "insert into aluno(nome,idade) values (?,?)"
        let values = [n,i]
    
        con.query(sql, values, (error,result) => {
            if(error) {
                console.log("Dados não encontrados")
            }
            console.log("Dados inseridos com sucesso!")
    
        })
          con.end()
    }

    //Método para selecionar
    async selecionar (id){
        const con = await connection()
        let sql = "select * from aluno where id = ?"
        let values = id
        con.query(sql, values, (error, result) => {
            if(error){
                console.log("Não encontrado")
            }
            if(result.length > 0) {
                console.log("Aluno encontrado", result[0]);
                return result[0]
            } else {
                console.log("Nenhum aluno encontrado com o ID:", id)
            }

            console.log("Encontrado!" + result.affectedRows)
        })
         con.end
    }
}

export default Crud
