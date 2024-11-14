const router = require("express").Router();
const {createPartnerCtrl,getAllPartnersCtrl,getSinglePartnerCtrl,deletePartnerCtrl,updatePartnerCtrl} = require("../controllers/partenaireController");


router
  .route("/")
  .post(createPartnerCtrl )
  .get(getAllPartnersCtrl);


    // /api/partners/:id
router
.route("/:id")
.get( getSinglePartnerCtrl) 
.delete(deletePartnerCtrl)
.put(updatePartnerCtrl) ;

  
  module.exports = router ;