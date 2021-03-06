const express = require('express');

const router = express.Router();

const userDb = require('../data/helpers/userDb.js');

router.get('/', (req, res) => {
  userDb
    .get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id/posts', (req, res) => {
  const { id } = req.params;
  userDb
    .getUserPosts(id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  userDb
    .get(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  userDb
    .insert(req.body)
    .then(resposne => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;
  userDb
    .update(id, update)
    .then(count => {
      if (count > 0) {
        db
          .get(id)
          .then(updatedUsers => {
            res.status(200).json(updatedUsers[0]);
          })
          .catch();
      } else {
        res.status(404).json({ message: 'user at that id doesnt exist' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  userDb
    .get(id)
    .then(response => {
      user = { ...response[0] };
      userDb
        .remove(id)
        .then(response => {
          res.status(200).json(user);
        })
        .catch(error => {
          res.status(500).json(error);
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
