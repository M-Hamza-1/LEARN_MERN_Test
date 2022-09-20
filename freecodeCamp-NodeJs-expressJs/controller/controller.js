const express = require("express");
const app = express();
 let { people } = require("../json-data");
// static assets
app.use(express.static("../methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());


const getCont = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const  PostCont= (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const checkPostmanCont = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
}; 

const updateCont = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};



const deleteCont =(req, res) => {
  const id = req.params.id;

  const person = people.find((person) => person.id === Number(id));
  if (person) {
    const newPeople = people.filter((person) => person.id !== Number(id));
    res.status(201).json({ success: true, people: newPeople });
  } else {
    res
      .status(401)
      .json({ success: false, msg: `user with this${id} not found` });
  }
};

module.exports ={
    getCont, 
    PostCont,
    checkPostmanCont,
    updateCont,
    deleteCont,
}