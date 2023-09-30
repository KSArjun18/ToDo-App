import axios from "axios";

//Backend URL
const baseUrl = "https://backend-todo-nxgm.onrender.com";

//getting all todos
const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log("data...", data);
      setToDo(data);
    })
    .catch((err) => console.log(err));
};
//add new todo
const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};
//Updating todo
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

//delete todo
const deleteToDO = (_id,setToDo) => {
    axios
      .post(`${baseUrl}/delete`, { _id })
      .then((data) => {
        getAllToDo(setToDo);
      })
      .catch((err) => console.log(err));
  };
export { getAllToDo, addToDo, updateToDo,deleteToDO };
