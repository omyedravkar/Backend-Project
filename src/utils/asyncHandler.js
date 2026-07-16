const asyncHandler = (requestHandler) => {
     return (req , res, next) =>{
         Promise.resolve(requestHandler(req , res , next))
         .catch((err)=> next(err))
        }
}

export {asyncHandler}


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