import Head from 'next/head'
import Feed from '../components/feed'
import Header from '../components/header'
import Modal from '../components/modal'

export default function Home() {
  return (
    <div  className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header/>
    <Feed/>
    <Modal/>
    </div>
  )
}
