//express is the framework we're going to use to handle requests
const express = require('express');

//Create a new instance of express router
const router = express.Router();

router.get("/", (req, res) => {
    setTimeout(() => {
        res.send({
            message: "Thanks for waiting"
        });
    }, 1000);
});

router.post("/", (req, res) => {
    setTimeout(() => {
        res.send({
            message: "Thanks for waiting"
        });
    }, 1000);
});

module.exports = router;