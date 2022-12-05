const { Router } = require("express");
const authRoutes = require("./auth.routes");
const router = Router();
const users = require("./users.routes")
const streams = require("./streams.routes")
const CategoriesDb = require("./categories.routes")
const MercadoPago = require("./mercadopago.routes")
const Subscriptions = require("./subscriptions.routes")
const { PagarProducto } = require("../controllers/webhooksMP")


router.use("/api", users);
router.use("/api/auth", authRoutes);
router.use("/api", streams);
router.use("/api", CategoriesDb);
router.use("/api/checkout", MercadoPago)
router.post("/api/notifications", PagarProducto)
router.use("/api", Subscriptions)


module.exports = router;
