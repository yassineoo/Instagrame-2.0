import Image from 'next/image';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
   
} from '@heroicons/react/outline'


import { HomeIcon} from '@heroicons/react/solid'
import {signIn, signOut, useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modelAtom';
export default function Header() {
  const {data:session } = useSession();
  const [open,setOpen] = useRecoilState(modalState)
  const router = useRouter();
  return (
    <div className='bg-white shadow-sm sticky border-b top-0 z-50'>
        <div className='flex justify-between mx-5 xl:mx-auto items-center max-w-5xl'>

            
          <div  onClick = {() => {router.push('/')}} className='relative w-24 h-24 hidden lg:inline-grid cursor-pointer '>
                <Image layout='fill' 
                src="https://links.papareact.com/ocw"
                alt ='Logo' 
                objectFit='contain'
             
                />
            </div>

            <div className='relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer'>
                <Image layout='fill' 
                src="https://links.papareact.com/jjm"
                alt ='Logo' 
                objectFit='contain'
             
                />
            </div>
       <div className='max-w-xs'>
       <div className='relative  p-3 rounded-md flex items-center'>
          <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
          <SearchIcon className='h-5 w-5 text-gray-500'/>  
          </div>
            <input typr='text' placeholder='Search' className='pl-10 py-2
             bg-gray-50 block w-full  border-gray-700 sm:text-sm  rounded-md focus:border-black focus:ring-black'/>
        </div>
       </div>
        {/*Right side */}
        <div className='flex  items-center justify-end space-x-4' >
        <HomeIcon onClick = {() => {router.push('/')}} className='navBtn text-black h-6'/>
        <MenuIcon className='md:hidden h-6 cursor-pointer'/>
      {session?(
        <>
                <div className='relative navBtn'>

                  <PaperAirplaneIcon className='navBtn rotate-45'/>
                  <div className='absolute -top-2 -right-1 text-sm w-5 bg-red-500 text-white  
                  rounded-full flex items-center justify-center animate-pulse '>3</div>
                  </div>
                  <PlusCircleIcon onClick={()=>setOpen(true)} className='navBtn'/>
                  <UserGroupIcon className='navBtn'/>
                  <HeartIcon className='navBtn'/>
                  <img  onClick={signOut} src={session?.user?.image}      alt='profile picture' className=' cursor-pointer h-10 w-10 rounded-full cursor' 
                  />
          </>
      ):(
        <button onClick={signIn} className='font-semibold text-blue-400' > SignIn</button>
      )}
     
        
       

        
        </div>

        </div>

    </div>
  )
}
