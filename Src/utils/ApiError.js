class ApiError extends Error {
  constructor(
    status,
    message = "something went wrong",
    Errors = [],
    stack = ""
  ) {  // overwrite
    super(message)(parameter)
    this.statuscode = statuscode
    this.data = null
    this.message = message
    this.success = false,
      this.Errors = Errors
    
    // This is a optional write or not
    // This is if and else statement
    
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  
  }
}

export {ApiError}