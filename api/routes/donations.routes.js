const Users = require("../models/Users");
const Donation = require("../models/Donations");
const Express = require("express");
const router = Express.Router();

router.post("/donations/:id", async (req,res)=>{
    try {
        const {id} = req.params
        const donationUser = req.body
        const donation = await Donation.create(donationUser)
        const userDonation = await Users.findOne({_id:id})
        userDonation.donations.push(donation._id)
        const saveDonation = userDonation.save()
        res.status(200).send("Se dono con exito")
    } catch (error) {
        res.status(404).send("Problemas mandando una donacion")
    }
})


module.exports = router;