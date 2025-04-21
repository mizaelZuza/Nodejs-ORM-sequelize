const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
    };

    async pegarMatriculasPorEstudante(estudanteID) {
        const estudante = await super.pegarUmRegistroPorId(estudanteID);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    };
};

module.exports = PessoaServices;