const dbConnect = require("../database");

const getHotelController = (req, res) => {
  dbConnect.query("SELECT * FROM hotel", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.json(rows);
    }
  });
};

const createHotelController = (req, res) => {
  const { hotelName, img, category, price } = req.body;
  const sql = `INSERT INTO hotel (hotelName, img, category, price, classification) VALUES ('${hotelName}', '${img}', '${category}', '${price}', '${classification}')`;
  dbConnect.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const updateHotelController = (req, res) => {
  dbConnect.query(
    `UPDATE hotel SET ? WHERE hotel_id = ${req.params.id}`,
    req.body,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

const deleteHotelController = (req, res) => {
  dbConnect.query(
    `DELETE FROM hotel WHERE hotel_id = ${req.params.id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};
// filter by price <= x 
const filterPriceController = (req, res) => {
  dbConnect.query(
    `SELECT * FROM hotel WHERE price <= ${req.params.price}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};
// filter by category
const filterByCategoryController = (req, res) => {
  dbConnect.query(
    `SELECT * FROM hotel WHERE category = ${req.params.category}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};
// order by price asc
const orderPriceAscController = (req, res) => {
  dbConnect.query(`SELECT * FROM hotel ORDER BY price ASC`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
// order by price desc
const orderPriceDescController = (req, res) => {
  dbConnect.query(`SELECT * FROM hotel ORDER BY price DESC`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
// order by category asc
const orderCategoryAscController = (req, res) => {
  dbConnect.query(
    `SELECT * FROM hotel ORDER BY category ASC`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

// order by category desc
const orderCategoryDescController = (req, res) => {
  dbConnect.query(
    `SELECT * FROM hotel ORDER BY category DESC`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
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
};
