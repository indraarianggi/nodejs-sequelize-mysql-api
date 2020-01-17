module.exports = app => {
  const bookController = require("../controllers/book.controller.js");

  const router = require("express").Router();

  // Create a new Book
  router.post("/", bookController.create);

  // Retrieve all Books
  router.get("/", bookController.findAll);

  // Retrieve all published Books
  router.get("/published", bookController.findAllPublished);

  // Retrieve a single Book with id
  router.get("/:id", bookController.findOne);

  // Update a Book with id
  router.put("/:id", bookController.update);

  // Delete a Book with id
  router.delete("/:id", bookController.delete);

  // Delete all Books
  router.delete("/", bookController.deleteAll);

  app.use("/api/books", router);
};
