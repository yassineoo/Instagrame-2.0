import { useSession , signOut } from "next-auth/react"
export default function MiniProfile() {
  const {data : session} =useSession();
  return (
    <div className=' flex bg-red items-center justify-between mt-6 ml-3'>
        <img src={session?.user?.image}    alt='profile'
        className='rounded-full border p-[2px] w-16 h-16'
        />
        <div className='flex-1 mx-4'>
            <h2 className="font-bold">{session?.user?.name} </h2>
            <h3 className="text-gray-600">Welcome to my Insta </h3>
          
        </div>
        <button onClick={signOut} className="text-blue-400 font-semibold">
            Sign out
        </button>
    </div>
  )
}
