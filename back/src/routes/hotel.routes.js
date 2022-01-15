const { Router } = require('express');
const router = Router();

const {getHotelController, createHotelController, updateHotelController, deleteHotelController, filterPriceController, filterByCategoryController}= require("../controllers/index")

router.get("/", getHotelController)

router.get("/filter/price/:price", filterPriceController)

router.get('/filter/category/:category', filterByCategoryController)

router.post("/", createHotelController)

router.put("/:id", updateHotelController)

router.delete("/:id", deleteHotelController)



module.exports = router;