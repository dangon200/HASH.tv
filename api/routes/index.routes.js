const { Router } = require("express");
const authRoutes = require("./auth.routes");
const router = Router();

const users = require("./users.routes")
const streams = require("./streams.routes")
const CategoriesDb = require("./categories.routes")
const MercadoPago = require("./mercadopago.routes")
const Subscriptions = require("./subscriptions.routes")
const { PagarSubscription, PagarHashCash } = require("../controllers/webhooksMP")
const donationsUser = require("./donations.routes")

router.use("/api", users);
router.use("/api/auth", authRoutes);
router.use("/api", streams);
router.use("/api", CategoriesDb);
<<<<<<< HEAD
router.use("/api/checkout", MercadoPago);
router.post("/api/notifications", PagarProducto);
router.use("/api", Subscriptions);
=======
router.use("/api/checkout", MercadoPago)
router.post("/api/subscriptions", PagarSubscription)
router.post("/api/hashcash", PagarHashCash)
router.use("/api", Subscriptions)
>>>>>>> c441399c8d3ef05ff619eaf3ef98bef088581f50
router.use("/api", donationsUser);
module.exports = router;
