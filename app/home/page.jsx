"use client"
import styles from './home.module.scss'
import Collection from '@/components/Collection'
import {daylist} from '@/utils/contants'
import Image from 'next/image'
import {useSession , signOut} from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Edit2 } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Home(){
  const {data: session} = useSession()

  const day = () => {
    return daylist[new Date().getDay() - 1].name
  }
  console.log(session)
  return (
    <div>
      
      <head>
        <title>Home Page</title>
      </head>

      {session && session.user ? (
        <main className={styles.home}>
          <header className='flex items-center justify-between mb-20'>
            <div className='flex items-center gap-3'>
              <div>
                <Image className='rounded-full' src={session.user.image}  width={100} height={100} />
              </div>
              <div>
                <h1 className='text-3xl font-bold flex items-center justify-between'>
                  <span>{session.user.name}</span>
                </h1>
                <p className='text-sm text-gray-300'>{session.user.email}</p>
              </div>
            </div>
            <div className='flex gap-3'>
              <Button>
                <Edit2 className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" onClick={() => signOut()}>Sign Out</Button>
            </div>
          </header>
          <div className={styles.title}>
            <h3 className='text-xl font-bold text-gray-300'>{day()}</h3>
          </div>
          <div className={styles.title}>
            <h1>Today's Workout</h1>
            <Swiper
              spaceBetween={20}
              slidesPerView={'auto'}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Collection />
              </SwiperSlide>
              <SwiperSlide>
                <Collection />
              </SwiperSlide>
              <SwiperSlide>
                <Collection />
              </SwiperSlide>
              <SwiperSlide>
                <Collection />
              </SwiperSlide>
            </Swiper>
          </div>
        </main>
      ) : <h1 className='text-white'>Loading...</h1>}
    </div>
  )
}