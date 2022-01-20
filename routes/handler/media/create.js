const isBase64 = require("is-base64");
const base64Img = require("base64-img");
const {Media} = require("../../../models");

module.exports = async (req, res) => {
    const image = req.body.image
    if (!isBase64(image , {mimeRequired: true})) {
        return res.status(400).json({ status: false , message: 'invalid type base64' })
    }

    // upload gambar
    base64Img.img(image , './public/image', Date.now(), async (err , filepath) => {
        if (err) {
            return res.status(400).json({status: false, message: err.message})
        }
        // 'public/image/namafile.png'
        const filename = filepath.split("\\").pop().split("/").pop();

        // buat objek media u/ buat row data baru
        const media = await Media.create({
            image: `image/${filename}`
        });

        return res.status(201).json({
            status: true,
            data: {
                id: media.id,
                image: `${req.get('host')}/image/${filename}`
            }
        })
    })
}