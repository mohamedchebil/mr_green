
const Partner = require("../models/Partenaire");
const asyncHandler = require("express-async-handler");
const path = require("path");




/**-----------------------------------------------
 * @desc    Create New Partner
 * @route   /api/partners
 * @method  POST
 
 ------------------------------------------------*/
 module.exports.createPartnerCtrl = asyncHandler(async (req, res) => {
   
// Create new partner and save it to DB
const partner = await Partner.create({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    website: req.body.website,
   
  });
  console.log(partner);
  
    res.status(201).json(partner);
  
    
  });


   /**-----------------------------------------------
 * @desc    Get All Partners
 * @route   /api/partners
 * @method  GET
 * @access  public
 ------------------------------------------------*/
 module.exports.getAllPartnersCtrl = asyncHandler(async (req, res) => {
    // Fetch all partners from the database
    const partners = await Partner.find();
  
    // Send the list of partners as response
    res.status(200).json(partners);
});


 /**-----------------------------------------------
 * @desc    Get Single partner
 * @route   /api/partners/:id
 * @method  GET
 * @access  public
 ------------------------------------------------*/
 module.exports.getSinglePartnerCtrl = asyncHandler(async (req, res) => {
    const partner = await Partner.findById(req.params.id) ;
    
    if (!partner) {
      return res.status(404).json({ message: "partner not found" });
    }
  
    res.status(200).json(partner);
  });


  /**-----------------------------------------------
 * @desc    Delete Partner
 * @route   /api/partners/:id
 * @method  DELETE
 ------------------------------------------------*/
 module.exports.deletePartnerCtrl = asyncHandler(async (req, res) => {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ message: "partner not found" });
    }
  
    
      await Partner.findByIdAndDelete(req.params.id);
       return res.status(400).json({ message: "deleted" });
  
     
    
  });

   /**-----------------------------------------------
 * @desc    Update Partner
 * @route   /api/partners/:id
 * @method  PUT
 ------------------------------------------------*/
 module.exports.updatePartnerCtrl = asyncHandler(async (req, res) => {
  
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ message: "partner not found" });
    }
  
   
    const updatedPartner = await Partner.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            website: req.body.website,
        },
      },{new:true}
    );
  
    //  Send response to the client
    res.status(200).json(updatedPartner);
  });