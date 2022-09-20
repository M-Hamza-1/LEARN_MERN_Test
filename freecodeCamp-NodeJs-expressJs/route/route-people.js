const express  = require('express');
const app = express();
const router = express.Router();

const {
  getCont,
  PostCont,
  checkPostmanCont,
  updateCont,
  authCont,
  deleteCont,
} = require("../controller/controller");

    router.get('/', getCont);
    router.post('/' , PostCont);
    router.post("/postman", checkPostmanCont);
    router.put('/:id' , updateCont);
    router.delete('/:id' , deleteCont);

    module.exports = router;
