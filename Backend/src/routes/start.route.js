import express from 'express'

const router = express.Router();

/* GET home page. */
router.get("/ping", (req, res) => { res.status(200).send("pong-pong"); });
router.get("/", (req, res) => { res.status(200).send("Exitoso"); });

export default router;// es necesario para llamar diferente a la imporacion