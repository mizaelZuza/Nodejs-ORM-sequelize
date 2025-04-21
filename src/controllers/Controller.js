
class Controller {
    constructor(entidadeService) {
        this.service = entidadeService;
    }

    async pegarTodos(req, res) {
        try {
            const listaDeRegistros = await this.service.pegarTodosOsRegistros();
            return res.status(200).json(listaDeRegistros);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: error.message });
        }
    };

    async pegarUmPorID(req, res) {
        const { id } = req.params;
        try {
            const umRegistro = await this.service.pegarUmRegistroPorId(Number(id));
            return res.status(200).json(umRegistro);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    };

    async criarUmNovo(req, res) {
        const dadosParaCriar = req.body;
        try {
            const novoRegistroCriado = await this.service.criarUmNovoRegistro(dadosParaCriar);
            return res.status(201).json(novoRegistroCriado);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    };

    async deletar(req, res) {
        const { id } = req.params;
        try {
            await this.service.deletarUmRegistro(Number(id));
            return res.status(200).json({ mensagem: `Registro ${id} deletado com sucesso` });
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }

    };

    async atualizar(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const foiAtualizado = await this.service.atualizarRegistro(dadosAtualizados, Number(id));
            if (!foiAtualizado) {
                return res.status(400).json({ erro: 'Registro não atualizado' });
            } else {
                return res.status(200).json({ mensagem: 'Registro atualizado com sucesso' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: error.message });
        }
    };
};


module.exports = Controller;

