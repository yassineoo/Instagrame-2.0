import { useSession } from "next-auth/react";
import MiniProfile from "./miniProfile";
import Posts from "./posts";
import Stories from "./stories";
import Suggestion from "./suggestion";



export default function Feed() {
const {data : session } = useSession();
  return (
    <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-5xl mx-auto ${!session && '!grid-cols-1 !max-w-3xl '}`}>
    {/* left side */}
        <section className="col-span-2">
          <Stories/>
            {/* posts */}
              <Posts/> 
        
        </section>
        {session && (
          <section className='hidden xl:inline-grid md:col-span-1'>
        <div className='fixed'>

          <MiniProfile/>
          <Suggestion/>
        </div>
        </section>
        )}
     

    </main>
  )
}
