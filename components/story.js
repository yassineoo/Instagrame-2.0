
export default function Story({img ,name}) {
  return (
    <div>
        <img
           
            src={img}
            alt='Story'
            className='rounded-full w-14 h-14
             p-[1.5px] border-red-500 border-2 object-contain cursor-pointer
             transition hover:scale-110 duration-200 ease-in-out'
        />
        <p className="text-xs w-14 truncate text-center">{name}</p>
    </div>
  )
}
