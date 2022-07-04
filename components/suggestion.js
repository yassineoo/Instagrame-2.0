import { faker } from '@faker-js/faker';
import{useState ,useEffect} from 'react';

export default function Suggestion() {

  const [suggestion, setsuggestion] = useState([])
  useEffect(() => {
      const suggestionsLocal = [...Array(5)].map((_,i) => ({
        avatar :faker.image.avatar(),
        name :faker.name.firstName(),      
        company:      faker.company.companyName(),
          id:i
      }))
      setsuggestion(suggestionsLocal);
  },[]);

  return (
    <div  className='mt-4 ml-10'>
      <div className='flex items-center justify-between'>
        <h3 className='text-sm font-bold text-gray-400'> Suggestions For You </h3>
        <button className='font-semibold text-gray-600'>See All</button>
      </div>

      {
        suggestion.map(item => (
          <div key={item.id} className='flex items-center justify-between mt-3'>
          <img src={item.avatar}
          className='rounded-full h-16 border'

          />
          <div className='flex-1 mx-4'>
          <h2 className='text-sm font-semibold'>{item.name}</h2>
          <h3 className='truncate w-22 text-xs text-gray-400'>Work at {item.company}</h3>
          </div>

          <button className='font-semibold text-blue-600'>Follow
          </button>

          </div>
        ))
      }

    </div>
  )
}
