import mongoose , {Schema} from "mongoose";

const userSchema = new Schema(
      {
    userName: {
          type: String,
          required: true,
          Unique: true,
          lowercase: true,
          trim: true,
          index:"3"
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    FullName:{
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true
    },
    avtar:{
      type: String,
      required: true
    },
    coverImage:{
      type: String
    },
    watchHistory:[
      {
        type: Schema.Types.objectId,
        ref: "videos"
      }
    ],
    Password:{
        type: String,
        required: [ true , "password is required"]
    },
    RefereshToken:{
      type: String
    },
        
  },
    {
    timestamp: true
    }
)


userSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) return next();
  this.Password = bcrypt.hash(this.Password, 10)
  next()
})

userSchema.methods.isPasswordCorrect = async function (Password) {
  return await bcrypt.compare(Password, this.Password)
}

userSchema.method.generateAccessToken = function () {
  return jwt.sign(
    {
    _id: this._id,
    userName: this.userName,
    FullName: this.FullName,
    email: this.email
    },
    process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
userSchema.methods.generateRefereshToken = function () {
  jwt.sign(
    {
      _id: this._id,
      userName: this.userName
    },
    process.env.REFRESH_TOKEN_SECRET, {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}


export const User = mongoose.model("User" , userSchema)