let bd = require("../repository/bd.json")

class Service{

    getUsuarios(){
        return bd
    }
    
    getUsuariosById(id){

        const objetoUsuario = bd.find(item => item.id == id)
        if(!objetoUsuario){
            throw new Error(`Usuario com o id - ${id} não encontrado!!`)
        }
        return objetoUsuario
    }
    addUsuario(obj) {
    const {nome, email} = obj
    const objetoUsuario = {id: bd.length + 1, nome, email}

    if(!nome || !email) {
      throw new Error(`Algo está errado. Tente novamente.`)
    }
  
    if(nome == " " || email == " ") {
      throw new Error(`Preencha todos os campos.`)
    }

    bd.push(objetoUsuario)
    return "Usuário inserido com sucesso!"
  }

  editarUsuario(id, obj) {
    let objetoUsuario = bd.find(u => u.id == id)

    if(!objetoUsuario) {
      throw new Error(`Usuário com o id ${id} não encontrado.`)
    }

    objetoUsuario.nome = obj.nome
    objetoUsuario.email = obj.email
    return "Usuário editado com sucesso!"
  }

  deletarUsuario(id) {
    let objetoUsuario = bd.find((u) => u.id == id)

    if(!objetoUsuario) {
      throw new Error(`Usuário com o id ${id} não encontrado`)
    }

    bd = bd.filter(u => u.id != id);
    return "Usuário excluído"
  }

}
module.exports = Service