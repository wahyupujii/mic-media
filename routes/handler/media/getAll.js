const {Media} = require("../../../models");
module.exports = async (req, res) => {
    const media = await Media.findAll({  // selected attribute
        attributes: ['id' , 'image']
    });

    const mappedMedia = media.map(med => {
        med.image = `${req.get('host')}/${med.image}`;
        return med
    })

    if (media) {
        return res.status(200).json({
            status: true,
            message: "all data media",
            data: mappedMedia
        })
    } else {
        return res.status(404).json({ status: true, message: "media data not found" })
    }
}