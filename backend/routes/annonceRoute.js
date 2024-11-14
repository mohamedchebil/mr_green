const router = require("express").Router();
const photoUpload = require("../middlewares/photoUpload");
const {createAnnonceCtrl,getAllAnnoncesCtrl,getSingleAnnonceCtrl,deleteAnnonceCtrl,updateAnnonceCtrl,updateAnnonceImageCtrl} = require("../controllers/annonceController");



router
  .route("/")
  .post( photoUpload.single("image"), createAnnonceCtrl) 
  .get(getAllAnnoncesCtrl) ;



  // /api/annonces/:id
router
.route("/:id")
.get( getSingleAnnonceCtrl) 
.delete( deleteAnnonceCtrl)
.put(updateAnnonceCtrl);


 // /api/annonces/update-image/:id
 router
 .route("/update-image/:id")
 .put(photoUpload.single("image"), updateAnnonceImageCtrl);



module.exports = router ;