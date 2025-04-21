const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {

    constructor() {
        super(pessoaServices);
    };

    async pegarMatriculas(req, res){
        const { estudanteID } = req.params;
        try {
            const listaMatriculas = await pessoaServices.pegarMatriculasPorEstudante(Number(estudanteID));
            return res.status(200).json(listaMatriculas);
        } catch (error) {
            console.error(error);
        }
    }
};

module.exports = PessoaController;