const { Router } = require("express");
const authRoutes = require("./auth.routes");
const router = Router();

const users = require("./users.routes");
const streams = require("./streams.routes");
const CategoriesDb = require("./categories.routes");
const MercadoPago = require("./mercadopago.routes");
const Subscriptions = require("./subscriptions.routes");
const {
  PagarSubscription,
  PagarHashCash,
} = require("../controllers/webhooksMP");
const donationsUser = require("./donations.routes");

router.use("/api", users);
router.use("/api/auth", authRoutes);
router.use("/api", streams);
router.use("/api", CategoriesDb);
router.use("/api/checkout", MercadoPago);
router.use("/api", Subscriptions);
router.use("/api/checkout", MercadoPago);
router.post("/api/subscriptions", PagarSubscription);
router.post("/api/hashcash", PagarHashCash);
router.use("/api", Subscriptions);
router.use("/api", donationsUser);
module.exports = router;
