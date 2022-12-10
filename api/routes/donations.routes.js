const Users = require("../models/Users");
const Donations = require("../models/Donations");
const Streams = require("../models/Stream");
const Express = require("express");
const router = Express.Router();

router.post("/donations", async (req,res)=>{
    try {
        const { user, cash, comment, streamer } = req.body;
        console.log(req.body)
        const userDonation = await Users.findOne({_id: user})
        if(userDonation.HashCash >= cash){
            const donation = await Donations.create({
                user: user,
                streamer: streamer,
                price: cash,
                comment: comment
            })
        userDonation.donations.push(donation._id)
        console.log(userDonation)
        userDonation.HashCash = userDonation.HashCash - parseInt(cash)
        const saveDonation = userDonation.save()
        console.log(userDonation)
        const streamDonation = await Users.findOne({myStreams: streamer})
        console.log(streamDonation)
        streamDonation.HashCash = streamDonation.HashCash + cash
        const saveStrem = streamDonation.save()
        res.status(200).json(donation)
       }else{ 
        res.status(400).send("No poseé suficiente Hash Cash en su cuenta")
       }
    } catch (error) {
        res.status(404).send("Problemas con la donación, intente nuevamente en un momento")
    }
})


module.exports = router;