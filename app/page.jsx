import Header from '@/components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="wrapper mb-5 h-screen flex items-center flex-col justify-center">
        <div className='flex justify-center mb-10 items-center'>
          <h1 className='font-black text-6xl'>
            <span className='mb-4 block text-8xl coloredText'>Create Your Own</span>
            <span>Fitness Training & Diet Program</span>
          </h1>
        </div>
        <div className="flex gap-5">
          <Link href='/create/training' className='border border-dashed rounded-lg px-3 py-2'>Create Training Program</Link>
          <Link href='/create/diet' className='border border-dashed rounded-lg px-3 py-2'>Create Diet Program</Link>
        </div>
      </div>
    </main>
  )
}
