const Product = require("../models/productModel");

//create Product  --Admin

exports.createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body);
    
    res.status(201).json({
        success:true,
        product
    })
}

//Get all products
exports.getAllProducts = async(req,res)=>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
}

// Get all Products

exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();
  
    const apiFeature = new ApiFeatures(Product.find(), req.query)
      .search()
      .filter();
  
    let products = await apiFeature.query;
  
    let filteredProductsCount = products.length;
  
    apiFeature.pagination(resultPerPage);
  
    products = await apiFeature.query;
  
    res.status(200).json({
      success: true,
      products,
      productsCount,
      resultPerPage,
      filteredProductsCount,
    });
  });

  // Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      product,
    });
  });
  




//update Product

exports.updateProducts = async(req,res,next) => {

    let product = Product.findById(req.params.id);

    if(!product)
    {
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id.req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
}

// Delete Product 

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }
  
    await product.remove();
  
    res.status(200).json({
      success: true,
      message: "Product Delete Successfully",
    });
  });