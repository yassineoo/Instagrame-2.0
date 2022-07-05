
import {getProviders ,signIn as signInIntoProvider} from 'next-auth/react'
import { useState , useEffect } from 'react';

import Header from '../../components/header';
export default function SignIn (){
  const [providers, setProviders] = useState({});

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
    return (
        <div className=''>
          <Header/> 
          <div className='flex flex-col items-center justify-center min-h-screen
          py-2 -mt-10 px-14 text-center'>

              <img  className='w-80'
              src='https://links.papareact.com/ocw' alt='logo'/>
                      <div className='mt-40 mx-auto'>
                        {
                          Object.entries(providers).map(([key,provider]) => (
                        
                              <div key={key} >

                                      <button className='p-3 bg-blue-400 rounded-lg text-white' onClick={() => signInIntoProvider(provider.id,{callbackUrl:'/'})}>
                                        Sign in with {provider.name}
                                      </button>
                              </div>
                    ))}
                      </div>
             </div>
         </div>
    )


}
