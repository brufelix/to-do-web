const {
  ModelTask
} = require("../model");

module.exports = app => {

  app.get("/", (_, response, next) => {
    return response.json({
      message: "Welcome: TASK API"
    });
  })

  app.get("/tasks", (_, response, next) => {

    ModelTask.find((error, result) => {
      if (error) {
        throw new Error("Error get /tasks")
      }
      try {
        response.status(200).send(result);
      } catch (_) {
        throw new Error("Error get /tasks")
      }
    })

  })

  app.post("/task", (request, response, next) => {

    const newTask = new ModelTask({
      description: request.body.description,
      done: false,
    })

    newTask.save();

    ModelTask.find((error, result) => {
      if (error) {
        throw new Error("Error get /tasks")
      }
      try {
        response.status(200).send(result);
      } catch (_) {
        throw new Error("Error get /tasks")
      }
    })

  })

  app.delete("/task/:id", (request, response, next) => {

    ModelTask.deleteOne({
      _id: request.params.id
    }, (error) => {
      if (error) {
        throw new Error("Error delete /task/id")
      }

      try {
        ModelTask.find((error, result) => {
          if (error) {
            throw new Error("Error get /tasks")
          }
          try {
            response.status(200).send(result);
          } catch (_) {
            throw new Error("Error get /tasks")
          }
        })
      } catch (_) {
        throw new Error("Error put /tasks/id /tasks")
      }
    })

  })

  app.put("/task", (request, response, next) => {

    ModelTask.updateOne({
      _id: request.body._id
    }, {
      $set: {
        done: true,
      }
    }, (error) => {
      if (error) {
        throw new Error("Error put /tasks/id")
      }

      try {
        ModelTask.find((error, result) => {
          if (error) {
            throw new Error("Error get /tasks")
          }
          try {
            response.status(200).send(result);
          } catch (_) {
            throw new Error("Error get /tasks")
          }
        })
      } catch (_) {
        throw new Error("Error put /tasks/id /tasks")
      }
    })

  })

  app.put("/task/pending", (request, response, next) => {

    ModelTask.updateOne({
      _id: request.body._id
    }, {
      $set: {
        done: false,
      }
    }, (error) => {
      if (error) {
        throw new Error("Error put /tasks/id")
      }

      try {
        ModelTask.find((error, result) => {
          if (error) {
            throw new Error("Error get /tasks")
          }
          try {
            response.status(200).send(result);
          } catch (_) {
            throw new Error("Error get /tasks")
          }
        })
      } catch (_) {
        throw new Error("Error put /tasks/id /tasks")
      }
    })

  })

}