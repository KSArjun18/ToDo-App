const ToDoModel = require("../models/ToDoModel");
//Get all todo
module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};
//create todo
module.exports.saveToDo = async (req, res) => {
  const { text } = await req.body;
  ToDoModel.create({ text }).then((data) => {
    console.log("Added successfully");
    console.log(data);
    res.send(data);
  });
};

//update todo
module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("updated successfully"))
    .catch((err) => console.log(err));
};
//delete todo
module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("deleted successfully"))
    .catch((err) => console.log(err));
};
