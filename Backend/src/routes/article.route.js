import express from "express";

//import controllers
import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticles,
  updateArticle,
} from "../controllers/article.controller.js";

const router = express.Router();

/* GET home page. */
router.post("/create", createArticle);

//Read
router.get("/list", getArticles);
router.get("/search/:id", getArticle);

//Upgrade
router.put("/upgrate/:id", updateArticle);

//Delete
router.delete("/delete/:id", deleteArticle);

export default router;
