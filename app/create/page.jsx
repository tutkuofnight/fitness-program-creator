"use client"
import React from 'react'
import {Plus} from 'lucide-react'
import Link from 'next/link'
export default function Create() {
  return (
    <div className='page grid place-items-center min-h-screen'>
      <Link href="/create/training">
        <div className="create-box"> 
          <Plus className='w-10 h-10 mb-3' />
          <p className='text-xl font-bold select-none'>Workout Program</p>
        </div>
      </Link>
    </div>
  )
}
