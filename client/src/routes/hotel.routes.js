const { Router } = require('express');
const dbConnect = require("../database")
const router = Router();

router.get("/", (req, res)=> {
    dbConnect.query("SELECT * FROM hotel", (err, rows)=> {
        if(err) {
            console.log(err)
        }else {
            res.json(rows)
        }
    })
})

router.post("/", async (req, res)=> {
    const { hotelName, img, category, price } = req.body;
    const sql = `INSERT INTO hotel (hotelName, img, category, price) VALUES ('${hotelName}', '${img}', '${category}', '${price}')`;
    dbConnect.query(sql, (err, result)=> {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
})

router.put("/:id", (req, res)=> {
    dbConnect.query(`UPDATE hotel SET ? WHERE hotel_id = ${req.params.id}`, req.body, (err, result)=> {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
})

router.delete("/:id", (req, res)=> {
     dbConnect.query(`DELETE FROM hotel WHERE hotel_id = ${req.params.id}`, (err, result)=> {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
     })
})

module.exports = router;