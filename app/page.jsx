"use client"
import {useRouter} from 'next/navigation'
import Image from 'next/image'
import {useSession , signIn } from 'next-auth/react'
import { Button } from './components/ui/button'
import axios from 'axios'
export default function Page() {
  
  const router = useRouter()
  const { data:session } = useSession() 

  if(session && session.user) {
    // axios.post('/api/user/checkout' , session.user)
    return router.push('/home')
  }

  return (
    <main>
      <div className="wrapper mb-5 h-screen flex items-center flex-col justify-center">
        <Button className="flex items-center gap-2" onClick={() => signIn("google")}>
          <Image width={20} height={20} src={`/google-icon.png`} alt="SignIn with Google to FitProgram" />  Sign In with Google
        </Button>
      </div>
    </main>
  )
}
