const db = require('../models');


class Services{
    constructor(nomeDomodel){
        this.model = nomeDomodel;
    }

    async pegarTodosOsRegistros(){
        try {
            return await db[this.model].findAll();
            
        } catch (error) {
            console.error(error);
        }
    };

    async pegarUmRegistroPorId(id){
        try {
            return await db[this.model].findByPk(id);
        } catch (error) {
            console.error(error);
        }
    };

    async criarUmNovoRegistro(dadosParaCriar){
        try {
            return await db[this.model].create(dadosParaCriar);
        } catch (error) {
            console.error(error);
        }
    };

    async deletarUmRegistro(id){
        try {
            return await db[this.model].destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    async atualizarRegistro(dadosAtualizados, id){
        const listaDeRegistrosAtualizados = db[this.model].update(dadosAtualizados, {
            where:{
                id : id
            }
        });
        if(listaDeRegistrosAtualizados[0] === 0){
            return false;
        }else{
            return true;    
        }
    };
};

module.exports = Services;