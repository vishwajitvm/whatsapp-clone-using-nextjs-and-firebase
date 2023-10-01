import Image from 'next/image'
import BackgroundImage from '../public/whatsapp-bg.png'
import ChatSidebar from '@/modules/ChatSidebar'
import { AllUsers } from '@/types';

const getUsers = async () => {
  const staticData = await fetch("https://dummyjson.com/users" , {
    cache: "force-cache",
  });
  const dynamicData = await fetch("https://dummyjson.com/users" , {
    cache: "no-store",
  });
  const revalidatedData =  await fetch("https://dummyjson.com/users" , {
    next: {revalidate: 10},
  });

  const userData: AllUsers = await dynamicData.json() ;
  return userData ;
}

export default async function Home() {
  const fetchUsers = await getUsers() ;

  return (
    <main className="flex h-screen overflow-hidden">
      <div className='bg-white-500 w-1/3 overflow-y-auto'>
        <ChatSidebar data={fetchUsers} />
      </div>

      <div className='w-full overflow-y-auto flex items-center justify-center bg-blue-50'>
        <Image src={BackgroundImage} alt='Image not Found' width={3000} height={2000} />
      </div>
    </main>
  )
}
