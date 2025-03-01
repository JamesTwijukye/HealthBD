import mongoose from 'mongoose'

const DBconnect = async()=>{

	const mongoURI=process.env.MONGO_URI;
	try{
	await mongoose.connect(mongoURI);
	console.log('Database connection successfull');
	}catch(error){
	console.error('Database connection failed:');
	}
	



};
export default DBconnect;
