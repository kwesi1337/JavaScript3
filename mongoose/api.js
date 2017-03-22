let router = require('express');

router.get("/", (req, res)=>{

    res.json({msg: "Hello World"});
});

module.exports = router;
