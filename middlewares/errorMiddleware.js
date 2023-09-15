const errorMiddleWare = (error,req,res,next) => {
    console.log("Hello From Error Middleware");
    res.status(404).json({message : error.message,stackTrace : error.stack})
}

module.exports = errorMiddleWare