import mongoose from 'mongoose'

const DBconnect = async()=>{

	const mongoURI=process.env.MONGO_URI;
	try{
	await mongoose.connect(mongoURI);
	console.log('Database connection successful');
	}catch(error){
	console.error(`Database connection failed:${error}`);
	}
	



};
export default DBconnect;
