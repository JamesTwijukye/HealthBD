import React from 'react'

const LoginComponent = () => {
  return (
   
    <div  className='h-full w-full flex flex-col justify-center items-center'>
         {/* form with its flex container to be exported to login.jsx*/}
        <form action="{handleLogin}" className='bg-white-300 text-black rounded-lg p-2 shadow-md'>
            <h2 className='text-center font-semibold font-serif mb-2'>LOGIN</h2>
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
                    placeholder='email'
                    value={form.email}
                    name='email'
                    onChange={handleChanges}
                    className='w-3/4 h-10 mb-4 rounded-lg border-2'
                    />
                </div>
               </form>

         </div>
  )
}

export default LoginComponent;