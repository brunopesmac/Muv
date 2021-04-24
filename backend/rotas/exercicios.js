const express = require("express");
const router = express.Router();
const Exercicio = require("../models/exercicio");

//Conexão Exercicios
router.get("", (req, res, next) => {
  Exercicio.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      mensagem: "Tudo OK",
      exercicios: documents,
    });
  });
});

router.get("/:id", (req, res, next) => {
  Exercicio.findById(req.params.id).then((exer) => {
    if (exer) {
      res.status(200).json(exer);
    } else {
      res.status(404).json({ mensagem: "Exercicio não encontrado!" });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Exercicio.deleteOne({ _id: req.params.id }).then((resultado) => {
    console.log(resultado);
    res.status(200).json({
      mensagem: "Exercicio removido",
    });
  });
});

router.put("/:id", (req, res, next) => {
  const exercicio = new Exercicio({
    _id: req.params.id,
    nome: req.body.nome,
    intensidade: req.body.intensidade,
    descricao: req.body.descricao,
    series: req.body.series,
    repeticoes: req.body.repeticoes
  });
  Exercicio.updateOne({ _id: req.params.id }, exercicio)
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(200).json({ mensagem: "Atualização realizada com sucesso" });
});


module.exports = router;
