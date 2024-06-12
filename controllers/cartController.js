const carts = require('../models/cartModels')

exports.addToCart = async(req,res)=>{
    try {
        const userId = req.payload
        const {id,title,price,category,image,quantity} = req.body 
        const existingProduct = await carts.findOne({userId,id})
        if (existingProduct) {
            existingProduct.quantity+=1
            existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
            await existingProduct.save()
            res.status(200).json("item added to your cart")
        } else {
            const newWish = new carts({
                id,title,price,category,image,userId,totalPrice:price,quantity
            })
            await newWish.save()
            res.status(200).json("item added to your cart")
        }
     } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}

exports.getCart= async(req,res)=>{
    try {
        const userId= req.payload
        const result = await carts.find({userId})
        res.status(200).json(result)
        } catch (error) {
        res.status(404).json(error)
        
    }
}

exports.removeFromCart= async(req,res)=>{
    try {
        const wishId= req.params.id
        const result = await carts.findByIdAndDelete({_id:wishId})
        res.status(200).json(result)
        } catch (error) {
        res.status(404).json(error)
        
    }
}

exports.cartInc = async(req,res)=>{
    try {
        const cartId= req.params.id
        const result = await carts.findById({_id:cartId})
        result.quantity+=1
        result.totalPrice = result.quantity * result.price
        await result.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(error) 
    }
}
exports.cartDec = async(req,res)=>{
    try {
        const cartId= req.params.id
        const result = await carts.findById({_id:cartId})
        if (result.quantity==1) {
            const result1 = await carts.findByIdAndDelete({_id:cartId})
            res.status(200).json(result1)
        } else { 
            result.quantity-=1
            result.totalPrice = result.quantity * result.price
            await result.save()
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(404).json(error) 
    }
}

exports.emptyCart= async(req,res)=>{
    try {
        const userId= req.payload
        const result = await carts.deleteMany({userId})
        res.status(200).json(result)
        } catch (error) {
        res.status(404).json(error)
        
    }
}