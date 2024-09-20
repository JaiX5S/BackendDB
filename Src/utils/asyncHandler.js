import req from "express/lib/request"
import res from "express/lib/response"

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
  }
 }


export { asyncHandler }

/*      we use try and catch method   */

// const asyncHandler = () => { }
// const asyncHandler = (func) => () => { }
// const asyncHandler = (func) => async() => { }

//  const asyncHandler = (fn) => async (res, req, next) => {
//  try {
//    await fn(req,res,next)
//  } catch (error) {
//    res.status(error.code || 500).json({
//      sucess: false,
//      message: error.code
//    })
//   }
//  }

