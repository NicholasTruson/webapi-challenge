const express = "express";
const router = require("express").Router();
const projectDatabase = require("./data/helpers/projectModel");

// -- project CRUD's

// -- POST (PROJMODEL.INSERT)

router.post("/", (req,res) => {
    projectDatabase.insert(req.body)
      .then(project => {
        res.status(201).json({project})
      })
      .catch(error => {
        res.status(500).json({error})
      })
  })

// -- GET (READ)

router.get("/", (req, res) => {
    projectDatabase
      .get()
        .then(proj => {
          res.status(200).json({proj})
        })
        .catch(error => {
          res.status(500).json({error})
        })
  })

// GET BY ID

router.get("/:id", validateId, (req, res) => {
    projectDatabase
      .get(req.params.id)
        .then(proj => {
          res.status(200).json({proj})
        })
        .catch(error => {
          res.status(500).json({error})
        })
  })

// -- PUT (PROJMODEL.UPDATE)

router.put("/:id", validateId, (req, res) => {
    projectDatabase.update(req.params.id, req.body)
      .then(project => {
        res.status(200).json({project})
      })
      .catch(error => {
        res.status(500).json({error})
      })
  })

// -- DELETE

router.delete("/:id", validateId, (req,res) => {
    projectDatabase.remove(req.params.id)
      .then(project => {
        res.status(200).json({project})
      })
      .catch(error => [
        res.status(500).json({error})
      ])
  })

// -- MIDDLEWARE

// -- ID

function validateId(req, res, next) {
    projectDatabase.get(req.params.id) 
     .then(user => {
       if (user) {
         next();
       }
       else {
         res.status(404).json({message: "incorrect id"})
       }
     })
  }

// -- POST

/*function validatePost(req, res, next) {
    if (!req.body.name || !req.body.description) {
      res.status(400).json({message: "missing required field"})
    }
    else if (!req.body) {
      res.status(400).json({message: "missing data"})
    }
    next();
  }*/



module.exports = router;