const asyncHandler = (requestHandler) => {

    Promise.resolve(requestHandler(requestHandler(req , res , next)))
    .catch((err)=> next(err))
}




/*

This try catch is used in some codebase so can be taken care off 
const asyncHandler = (fn)=> (req , res , next) => {
   
    try {
        await fn(req , res , next)
    } catch (error) {
        res.status(err.code || 500).json({
            success : false ,
            message : err.message
        })
    }
}

*/