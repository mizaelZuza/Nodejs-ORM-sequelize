const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.pegarTodos(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.pegarUmPorID(req, res));
router.post('/pessoas', (req, res) => pessoaController.criarUmNovo(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizar(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.deletar(req, res));
router.get('/pessoas/:estudanteID/matriculas', (req, res) => pessoaController.pegarMatriculas(req, res));
router.post('/pessoas/:estudanteID/matriculas', (req, res) => matriculaController.criarUmNovo(req, res));




module.exports = router;