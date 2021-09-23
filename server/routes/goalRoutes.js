const express = require('express');
const router = express.Router();

const Goal = require('../../models/Goal.js');

router.get('/goaltest', (req, res) => res.send('goal route testing!'));

router.get('/', (req, res) => {
    Goal.find()
      .then(goal => res.json(goal))
      .catch(err => res.status(404).json({ noarticlesfound: 'No goal found' }));
  });

router.post('/', (req, res) => {
    Goal.create(req.body)
      .then(goal => res.json({ msg: 'Goal added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this goal' }));
  });
