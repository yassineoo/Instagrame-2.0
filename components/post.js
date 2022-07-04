import React, { useEffect } from 'react'
import {
BookmarkIcon ,
ChatIcon,
DotsHorizontalIcon,
EmojiHappyIcon,
HeartIcon,
PaperAirplaneIcon
} from '@heroicons/react/outline' ;
import {HeartIcon as HeartIconFilled
} from '@heroicons/react/solid'
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import {doc,orderBy , collection ,query, addDoc,serverTimestamp,onSnapshot, setDoc, deleteDoc } from 'firebase/firestore'
import {db } from '../firebase'

export default function Post({post,id}) {
const {data :session }  =useSession();
const [comment ,setComment] = useState('')
const [comments ,setComments] = useState([])
const [likes, setLikes] = useState([]);
const [hasLiked , setHasLiked] = useState(false);
useEffect(
  () => 
onSnapshot (
  query(
   
    collection(db,'posts',id, 'comments'),
    orderBy('timestamp','desc')
    )  , snapshot => setComments(snapshot.docs))
  
,[db,id])
useEffect(
  () => 
onSnapshot (

   
    collection(db,'posts',id, 'likes')

     , snapshot => setLikes(snapshot.docs))
  
,[db,id])
useEffect(() => 
  setHasLiked ( 
    likes.findIndex((like) => (like.id === session?.user.id)) !==-1
  ) ,[likes])
  

const likePost = async() =>{
  if (hasLiked) {
   await deleteDoc(doc(db,'posts' ,id,'likes',session?.user.id))
  } 
  else await setDoc(doc(db,'posts' ,id,'likes',session?.user.id),{username:session?.user.name})
}

const sendComment =async (e) => {
  e.preventDefault()
  const commentToSend =comment ;
  setComment('');
  await addDoc(collection (db, 'posts' , id ,'comments'),{
    comment :commentToSend,
    name :session?.user.name,
    image : session?.user.image,
    timestamp : serverTimestamp(),
  })

}
return (
    <div className='bg-white py-5 my-7 border '>
        <div className='flex items-center justify-center p-5 '>
            <img src={post.profileImg} alt='user' className='rounded-full h-10 object-contain border p-1 mr-3'/>
            <p className='flex-1 font-bold'>{post.username}</p>
            <DotsHorizontalIcon className='h-5 cursor-pointer' />
        </div>

       
    <img src ={post.image} className='object-cover w-full'/>
    {session && (<div className='flex px-4 pt-4'>
      <div className='flex space-x-4 flex-1' >
       {!hasLiked ?( <HeartIcon  onClick={likePost} className='btn '/>
        ) :( <HeartIconFilled onClick={likePost} className='btn text-red-400 '/>
    )}   <ChatIcon className='btn'/>
        <PaperAirplaneIcon className='btn rotate-45'/>
      </div>     
      <BookmarkIcon className='btn pr-3' />
      </div>)}
      <div>
      <p className='p-5  font-semibold truncate'>
      {(likes.length> 0) && (
        <p className='font-bold mb-1 '>{likes.length} likes</p>
      )}
      <span className='font-bold mr-1'>{post.userName}</span>
      #{post.caption}
       </p>
      </div>
    
      {
       
        (comments.length > 0) && 
        <div className='ml-5'>
        {comments.map(comment => (
          <div key={comment.id} className='flex items-center space-x-2 mb-3 '>
            <img className = 'rounded-full h-7' src = {comment.data().image } alt='img' />
          <p className='text-sm flex-1'>
          <span className='font-bold'>{comment.data().name+' '}</span>{comment.data().comment}</p>
          </div>
        ))}
        </div>
      }

      {session && ( <form className='flex px-4 items-center justify-center'>
        <EmojiHappyIcon className='btn'/>
        <input 
        value={comment}
        onChange={e => setComment(e.target.value)}
        type='text' className='border-none  flex-1 focus:ring-0 outline-none '
        placeholder='Add a Comment ...'  />
        <button type='submit' disabled={!comment.trim()}
        onClick={sendComment} className='font-semibold text-blue-400'>Post</button>
      </form> )}

    </div>
  )
}
