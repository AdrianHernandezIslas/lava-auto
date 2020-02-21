module.exports = (() => {
    const cloudinary = require('cloudinary').v2;
    const {cloudinary_k} = require('../credentials');
    cloudinary.config(cloudinary_k);

    const uploadImg = async (file,path) => {
        const responseImage = await cloudinary.uploader.upload(file,{ folder: path });
        const {public_id} = responseImage;
        return public_id;
    };

    return{
        uploadImg
    };
})();



