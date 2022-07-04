import mongoose from "mongoose"
const {Schema, model } = mongoose

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    emailAdress: String
})

const user = mongoose.model("User", userSchema)
export default User