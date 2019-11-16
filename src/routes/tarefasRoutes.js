const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/:id", controller.getById)
router.get("/colaborador/:nomeColaborador", controller.getByName)
router.get("/concluidos/filtrar", controller.getByConcluido)
//router.get("/colaborador/:nomesobrenome", controller.getBYNomeSobrenome)
//router.get("/data/filtrar", controller.getByDataInclusao)
//rota router.get("/dias/filtrar", controller.getBydataInclusaoConcluisao)


module.exports = router