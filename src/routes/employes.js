const express = require('express');
const router = express.Router();
const prisma = require('../prismaClient');
const { success, error } = require('../utils/response');

// Lister tous les employés
router.get('/', (req, res) => {
  prisma.employe.findMany()
    .then(employes => success(res, employes, "Liste des employés récupérée !"))
    .catch(err => error(res, err.message));
});

// Ajouter un employé
router.post('/', (req, res) => {
  prisma.employe.create({ data: req.body })
    .then(data => success(res, data, "Employé ajouté avec succès !"))
    .catch(err => error(res, err.message));
});

// Modifier un employé
router.put('/:numEmp', (req, res) => {
  const id = parseInt(req.params.numEmp);
  prisma.employe.update({
    where: { numEmp: id },
    data: req.body
  })
    .then(data => success(res, data, "Employé modifié avec succès !"))
    .catch(err => error(res, err.message));
});

// Supprimer un employé
router.delete('/:numEmp', (req, res) => {
  const id = parseInt(req.params.numEmp);
  prisma.employe.delete({ where: { numEmp: id } })
    .then(() => success(res, null, "Employé supprimé avec succès !"))
    .catch(err => error(res, err.message));
});

// Statistiques des salaires
router.get('/stats', (req, res) => {
  prisma.employe.findMany()
    .then(employes => {
      const salaires = employes.map(e => e.nombreJours * e.tauxJournalier);
      const total = salaires.reduce((a, b) => a + b, 0);
      const min = Math.min(...salaires);
      const max = Math.max(...salaires);
      success(res, { total, min, max }, "Statistiques des salaires calculées !");
    })
    .catch(err => error(res, err.message));
});

module.exports = router;