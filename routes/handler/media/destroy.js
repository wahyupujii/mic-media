const {Media} = require("../../../models")
const fs = require("fs")

module.exports = async (req, res) => {
    const media = await Media.findByPk(req.params.id);

    if (!media) {
        return res.status(404).json({
            status: false,
            message: "media not found"
        })
    }

    // media.image = 'image/12345.png'
    fs.unlink(`./public/${media.image}` , async (err) => {
        if (err){
            return res.status(400).json({
                status: false,
                message: err.message
            })
        }
        await media.destroy()
        return res.status(200).json({
            status: true,
            message: `media id ${req.params.id} success deleted`
        })
    })
}