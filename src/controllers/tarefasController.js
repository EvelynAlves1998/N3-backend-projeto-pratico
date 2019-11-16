
const tarefas = require("../model/tarefas.json")

// listar todas as tarefas
exports.get = (req, res) => {
    const tarefaslista = tarefas.map(item => {
       item.id >= 1 
       return item
    })
    res.status(200).send(tarefaslista)
};

//listar as tarefas por id
    exports.getById = (req, res) => {
        const id = req.params.id
        if (id > 4 || id <= 0) {
            res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack")
          }
         res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
        
      };

 //listar as tarefas pelo nome do colaborador     
      exports.getByName = (req, res) => {
          const nomeColaborador = req.params.nomeColaborador
          
          const nome = tarefas.filter(tarefa => tarefa.nomeColaborador == nomeColaborador)
          
          if(nome.length == 0){
              
              res.sendStatus(404)
             
        }else{

             res.status(200).send(nome)
       
            }
        
    };

//listar somente as tarefas concluidas
    exports.getByConcluido = (req, res) => {
        const concluidos = tarefas.filter(tarefa => tarefa.concluido == "true")
 
            res.status(200).send(concluidos)
    
  };


// //Listar Data de inclusão Das mais novas para as mais antigas.
// exports.getByDataInclusao = (req, res) => {

//     const resultado = tarefas.sort(function(a, b){
  
//         return resultado (

//         new Date(

//             b.dataInclusao.split("/")[2],
//             b.dataInclusao.split("/")[1]-1,
//             b.dataInclusao.split("/")[0]
//         ) -
//         new Date(

//             a.dataInclusao.split("/")[2],
//             a.dataInclusao.split("/")[1]-1,
//             a.dataInclusao.split("/")[0]

        
//             )
//         ); 
//     });


// Mostrar a diferença das data de inclusao e conlusao
//rota router.get("/dias/filtrar", controller.getBydataInclusaoConcluisao) 
// exports.getBydataInclusaoConcluisao = (req, res) => {
//     const concluidos = tarefas.filter(tarefa => tarefa.concluido == "true")

//          res.status(200).send(concluidos)

// }



//  listar nome e sobrenome de uma pessoa
// exports.getBYNomeSobrenome = (req,res) =>{
    
//     const tarefas1 = tarefas;
//     for (tarefas of nomeColaborador) {
//             return tarefas.nomeColaborador
//     }
    
//     for ( let dataInclusao of tarefas.dataInclusao){
//         return dataInclusao
//   }
