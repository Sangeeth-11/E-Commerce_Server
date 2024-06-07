const products= require('../models/productModels')

exports.getAllProducts = async(req,res)=>{
    try {
        const result = await products.find()
        res.status(200).json(result) 
    } catch (error) {
        res.status(404).json(error)
    }
    
}
exports.getProduct = async(req,res)=>{
    try {
        const result = await products.findOne({id:req.params.id})
        res.status(200).json(result) 
    } catch (error) {
        res.status(404).json(error)
    }
    
}