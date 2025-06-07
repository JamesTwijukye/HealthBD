import React,{useState,useEffect}from 'react'
import axios from 'axios'
import LoginComponent from './LoginComponent';


const Login = () => {

    const[form,setForm] = useState({email:"",password:""});
    const[message,setMessage] = useState("");
    const [user, setUser] = useState(null);

    const handleChanges= (e) =>{

        setForm({...form,[e.target.name]:e.target.value});

    }

    const handleLogin =async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("https://localhost:5000/users/login",form);
            setMessage(res.data.message);
            setUser(res.data.user
                
            )
        }
        catch(error){
            setMessage(error.res?.data?.message||"login has failed");
        }

    }

    useEffect(()=>{
        if(message){

            const timer = setTimeout(()=>{
                setMessage("    ");
            },3000);
        }
        return ()=>clearTimeout(timer);
    },[message])


  return (
    <>
    
    <div  className='h-full w-full flex flex-col justify-center items-center'>
        <form onSubmit={handleLogin} className='bg-white-300 text-black rounded-lg p-2 shadow-md'>
            <h2 className='text-center font-semibold font-serif mb-2'>LOGIN</h2>
                <div className='flex flex-col justify-center items-center'> 
                    
                    <input 
                    type="text" 
                    placeholder='name'
                    value={form.name}
                    name='name'
                    onChange={handleChanges}
                    className='w-3/4 h-10 mb-4 rounded-lg border-2'
                    />
                </div>
                <div className='flex flex-col justify-center items-center'> 
                    
                    <input 
                    type="text" 
                    placeholder='email'
                    value={form.email}
                    name='email'
                    onChange={handleChanges}
                    className='w-3/4 h-10 mb-4 rounded-lg border-2'
                    />
                </div>

                <div>
                    
                    <input 
                    type="text" 
                    placeholder='password'
                    value={form.password}
                    name='password'
                    onChange={handleChanges}
                    className='w-3/4 h-10 mb-4 rounded-lg border-2'
                    />
                </div>
               </form>

               {user &&(
                    <div>
                        <h2>Welcome,{user.name}</h2>
                        <p>Email,{user.email}</p>
                    </div>
               )}
               {message &&(
                    <p>{message}</p>
               )}

         </div>
    </>
  )
}

export default Login;