const fs = require("fs");
const path = require("path");
const asyncHandler = require("express-async-handler");
const Annonce = require("../models/Annonce");
const {
  cloudinaryUploadImage,
  cloudinaryRemoveImage,
} = require("../utlis/cloudinary");

/**-----------------------------------------------
 * @desc    Create New annonce
 * @route   /api/annonces
 * @method  POST
 
 ------------------------------------------------*/
 module.exports.createAnnonceCtrl = asyncHandler(async (req, res) => {
    // 1. Validation for image
    if (!req.file) {
      return res.status(400).json({ message: "no image provided" });
    }
  
    
  
    // 3. Upload photo
    const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
    const result = await cloudinaryUploadImage(imagePath);
  
    
// Create new announcement and save it to DB
const annonce = await Annonce.create({
    nom: req.body.nom,
    description: req.body.description,
    prix: req.body.prix,
    numtel: req.body.numtel,
    adresse: req.body.adresse,
    image: {
        url: result.secure_url,
        publicId: result.public_id,
      },
  });
  
    // 5. Send response to the client
    res.status(201).json(annonce);
  
    // 6. Remove image from the server
    fs.unlinkSync(imagePath);
  });

  /**-----------------------------------------------
 * @desc    Get All Annonces
 * @route   /api/annonces
 * @method  GET
 * @access  public
 ------------------------------------------------*/
 module.exports.getAllAnnoncesCtrl = asyncHandler(async (req, res) => {
    // Fetch all annonces from the database
    const annonces = await Annonce.find();
  
    // Send the list of annonces as response
    res.status(200).json(annonces);
});


 /**-----------------------------------------------
 * @desc    Get Single Annonce
 * @route   /api/annonces/:id
 * @method  GET
 * @access  public
 ------------------------------------------------*/
 module.exports.getSingleAnnonceCtrl = asyncHandler(async (req, res) => {
  const annonce = await Annonce.findById(req.params.id) ;
  //populate("user", ["-password"]);
  
  if (!annonce) {
    return res.status(404).json({ message: "annonce not found" });
  }

  res.status(200).json(annonce);
});


/**-----------------------------------------------
 * @desc    Delete Annonce
 * @route   /api/annonces/:id
 * @method  DELETE
 ------------------------------------------------*/
 module.exports.deleteAnnonceCtrl = asyncHandler(async (req, res) => {
  const annonce = await Annonce.findById(req.params.id);
  if (!annonce) {
    return res.status(404).json({ message: "annonce not found" });
  }

  
    await Annonce.findByIdAndDelete(req.params.id);
    await cloudinaryRemoveImage(annonce.image.publicId);
     return res.status(400).json({ message: "deleted" });

   
  
});


 /**-----------------------------------------------
 * @desc    Update Annonce
 * @route   /api/annonces/:id
 * @method  PUT
 ------------------------------------------------*/
 module.exports.updateAnnonceCtrl = asyncHandler(async (req, res) => {
  
  // 2. Get the annonce from DB and check if post exist
  const annonce = await Annonce.findById(req.params.id);
  if (!annonce) {
    return res.status(404).json({ message: "post not found" });
  }

 
  // 4. Update annonce
  const updatedAnnonce = await Annonce.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        nom: req.body.nom,
        description: req.body.description,
        prix: req.body.prix,
        numtel: req.body.numtel,
        adresse: req.body.adresse,
      },
    },
  );

  // 5. Send response to the client
  res.status(200).json(updatedAnnonce);
});


 /**-----------------------------------------------
 * @desc    Update Annonce Image
 * @route   /api/annonces/update-image/:id
 * @method  PUT
 ------------------------------------------------*/
 module.exports.updateAnnonceImageCtrl = asyncHandler(async (req, res) => {
  // 1. Validation
  if (!req.file) {
    return res.status(400).json({ message: "no image provided" });
  }

  // 2. Get the Annonce from DB and check if post exist
  const annonce = await Annonce.findById(req.params.id);
  if (!annonce) {
    return res.status(404).json({ message: "annonce not found" });
  }

 

  // 4. Delete the old image
  await cloudinaryRemoveImage(annonce.image.publicId);

  // 5. Upload new photo
  const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
  const result = await cloudinaryUploadImage(imagePath);

  // 6. Update the image field in the db
  const updatedAnnonce = await Annonce.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        image: {
          url: result.secure_url,
          publicId: result.public_id,
        }
      }
    },
    { new: true });

  // 7. Send response to client
  res.status(200).json(updatedAnnonce);

  // 8. Remvoe image from the server
  fs.unlinkSync(imagePath);
});