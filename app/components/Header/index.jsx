'use client'
import {useState} from 'react'
import styles from './header.module.scss'
import {useSession} from 'next-auth/react'
import {FaPlus} from 'react-icons/fa6'
import Dropdown from '../ui/custom/Dropdown'
import {signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation'
export default  function Header(){
  const {data: session} = useSession()
  const router = useRouter()
  const [userDropdownStatus, setUserDropdownStatus] = useState(false)

  const handleSignOut = () => {
    signOut()
    router.push('/')
  }
  
  return (
    <header className={`${styles.header} base-border`}>
      <div className="text-white">FitProgram</div>
      <div className='flex items-center'>
        <button className={styles.headerButton}>
          <FaPlus />
          <div>Create Program</div>
        </button>
        {session && session.user && (
          <div className='relative'>
              <div onClick={() => setUserDropdownStatus(!userDropdownStatus)} className='cursor-pointer p-1 rounded-full transition duration-200 bg-transparent hover:bg-gray-400 hover:bg-opacity-10'>
                <img src={session.user.image} className='rounded-full w-8' />
              </div>
              {userDropdownStatus && (
                <Dropdown status={userDropdownStatus} close={status => setUserDropdownStatus(status)}>
                  <div className='p-4'>
                    <p>{session.user.name}</p>
                    <small className='text-gray-400'>{session.user.email}</small>
                  </div>
                  <div className='border-b-[1px] base-border'></div>
                  <div className="p-2 w-100 flex flex-col gap-1">
                    <a className='dropdown-item'>Profile</a>
                    <a className='dropdown-item'>Programs</a>
                  </div>
                  <div className='px-2 py-2 border-t-[1px] base-border'>
                    <a className='dropdown-item' onClick={() => handleSignOut()}>Logout</a>
                  </div>
                </Dropdown>
              )}
          </div>
        )}
        {!session && <button className='btn'>Sign In</button>}
      </div>
    </header>
  )
}