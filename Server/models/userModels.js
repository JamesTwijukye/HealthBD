import mongoose,{Schema} from "mongoose";

const userSchema = new Schema (

  {   
	userName :{
	
		type:String,
		required:true,
	},
	password:{
        
                type:String,
                required:true,
        },


	 email :{
        
                type:String,
                required:true,
        },



  },
	{

	timestamps:true,
	}




);

const users = mongoose.model("Users",userSchema);
export default users;

