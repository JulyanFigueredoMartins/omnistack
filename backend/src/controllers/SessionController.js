//criando uma sessão
//login, logout, lista de usuários logados

//metodos do controller: index, show, store, update, destroy
//index: listar sessões
//show : mostrar uma sessão
//store: criar sessão
//update: update
//destroy: deletar

const User = require('../models/User');

module.exports = {
    async store(req,res){
        const { email } = req.body;

        let user = await User.findOne({ email });
        
        if(!user){
            user = await User.create({ email }); //criar usuário no banco
        }

        return res.json(user); //retorn usuario criado
    } 
};