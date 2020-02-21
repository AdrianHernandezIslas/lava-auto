module.exports = (() => {
    const multer = require('multer');
    const path = require('path');
    const fs = require('fs');

    let storage = multer.diskStorage({
        destination: (req,file,cb) =>{
            cb(null,'./file');
        },
        filename:(req,file,cb) =>{
            cb(null,`${file.fieldname}${Date.now()}${path.extname(file.originalname)}`);
        } 
    });

    const upload = multer({storage});

    const deleteImg = async (file) => {
        fs.unlink(file,(err) => {
            if(err) throw err;
        });
    };

    return{
        deleteImg,
        upload
    };
})();