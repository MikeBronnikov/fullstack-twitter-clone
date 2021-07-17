import { model, Schema } from "mongoose";

const userSchema = new Schema({
 email: {
    unique: true,
    required: true,
    type: String
 },
 fullname: {
    required: true,
    type: String
 },
 username: {
    unique: true,
    required: true,
    type: String
 },
location: String,
password: {
    required: true,
    type: String
},
confirmed : {
    default: false,
    type: Boolean
},
confirmed_hash : {
    required: true,
    type: String
},
 __v: { 
     type: Number, 
     select: false,
    },
about: String,
 Website: String,
//  followers: User[],
//  follows,
//  tweets,
//  notifications
} )

userSchema.set('toJSON', {
    transform: function (_ : any, ret: any) {
        delete ret.email
        delete ret.password
        delete ret.confirmed_hash
        return ret
    }
})
export const UserModel =  model('User', userSchema)