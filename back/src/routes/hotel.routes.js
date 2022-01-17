const { Router } = require("express");
const router = Router();

const {
  getHotelController,
  createHotelController,
  updateHotelController,
  deleteHotelController,
  filterPriceController,
  filterByCategoryController,
  orderPriceAscController,
  orderPriceDescController,
  orderCategoryAscController,
  orderCategoryDescController
} = require("../controllers/index");


router.get("/", getHotelController);

router.post("/", createHotelController);

router.put("/:id", updateHotelController);

router.delete("/:id", deleteHotelController);

router.get("/filter/category/:category", filterByCategoryController);

router.get("/filter/price/:price", filterPriceController);

router.get("/order/asc/price", orderPriceAscController);

router.get("/order/desc/price", orderPriceDescController);

router.get("/order/desc/category", orderCategoryDescController);

router.get("/order/asc/category", orderCategoryAscController);


module.exports = router;
