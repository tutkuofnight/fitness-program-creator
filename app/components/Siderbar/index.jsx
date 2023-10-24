"use client"
import {Button} from '../ui/button'
import {Home, Plus, CalendarDays, Search} from 'lucide-react'
import {usePathname , useRouter} from 'next/navigation'
import {useSession} from 'next-auth/react'
import Image from 'next/image'


export default function Sidebar() {
  const pathName = usePathname()
  const router = useRouter()
  const session = useSession()
  const routes = [
    {
      name: "Home",
      path: "/home",
      icon: <Home />
    },
    {
      name: "Create",
      path: "/create",
      icon: <Plus />
    },
    {
      name: "Search",
      path: "/search",
      icon: <Search />
    },
    {
      name: "Programs",
      path: "/programs",
      icon: <CalendarDays />
    },
  ]
  return (
    <div className="flex items-center justify-center flex-col gap-3 w-[70px] border-r base-border py-5 h-screen">
      {routes.map(route => <Button key={route.path} onClick={() => router.push(route.path)} variant={pathName == route.path ? '' : 'ghost' } size="icon">{route.icon}</Button>)}
    </div>
  )
}