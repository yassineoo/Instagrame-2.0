
import { faker } from '@faker-js/faker';
import { useSession } from 'next-auth/react';
import{useState ,useEffect} from 'react';
import Story from './story';

export default function Stories() {
  const {data:session } = useSession();
    const [suggestion, setsuggestion] = useState([])
    useEffect(() => {
        const suggestionsLocal = [...Array(20)].map((_,i) => ({
          avatar :faker.image.avatar(),
          name :faker.name.firstName(),            
            id:i
        }))
        setsuggestion(suggestionsLocal);
    },[]);
  return (
    <div className='flex space-x-2 p-6 bg-white border-gray-300 
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
    {session &&( <Story img ={session?.user.image} name = {session?.user.name}/>)}
    {suggestion?.map(profile => (
        <Story img={profile.avatar} name = {profile.name} key={profile.id}/>
    )
    )}
    </div>
  )
}
