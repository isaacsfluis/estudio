import Article from "../models/article.model.js";

// Create Articles
export const createArticle = async (req, res) => {
  try {
    //destructurar el body
    const { article, description } = req.body;

    //crear la instancion del article para crear el objeto
    const newArticle = new Article({
      article,
      description,
    });
    // guardar en la BD
    await newArticle.save();

    //responde la peticion si todo salio bien
    res.status(201).json({
      article: newArticle.article,
      description: newArticle.description,
      date: newArticle.date,
    });
  } catch (error) {
    console.error(`💥 Error during registration: ${error.message}`);
    res.status(500).json({
      message: "Error registering the user.",
    });
  }
};


//Read articles --- GET  ALL or ID
export const getArticles = async (req, res) => {
    try {
      const articles = await Article.find();
      return res.status(200).json({
        message: `Found ${articles.length} articles.`,
        articles, // Incluye los artículos encontrados
      });
    } catch (error) {
      return res.status(500).json({ error: error.message }); // Manejo de errores
    }
  };
  
  export const getArticle = async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
      if (!article) {
        return res.status(404).send("Article not found");
      }
      return res.json(article);
    } catch (error) {
      return res.json(error);
    }
  };

// Update Article
export const updateArticle = async (req, res) => {
    try {
      // Verificar si el artículo existe
      const article = await Article.findById(req.params.id);
      if (!article) {
        return res.status(404).send("Article not found");
      }
  
      // Actualizar el artículo
      const updatedArticle = await Article.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // Devuelve el artículo actualizado
      );
  
      // Log opcional para depuración
      //console.log(updatedArticle);
  
      // Responder con el artículo actualizado
      return res.status(200).json(updatedArticle);
    } catch (error) {
      console.error(`Error updating article: ${error.message}`);
      return res.status(500).json({ error: error.message });
    }
  };
  
  
  //Delete Article
  export const deleteArticle = async (req, res) => {
    try {
      const article = await Article.findByIdAndDelete(req.params.id);
  
      if (!article) {
        return res.status(404).send("Article not found");
      }
  
      return res.status(200).json({
        message: `The article: ${article.article}, was deleted successfully.`,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message }); // Código de estado apropiado para errores internos
    }
  };
  