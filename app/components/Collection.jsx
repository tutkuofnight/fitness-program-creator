"use client"
import {useState} from 'react'
import { Checkbox } from "@/components/ui/checkbox"
export default function Collection({items}){
  const [itemStatus , setItemStatus] = useState(items)

  const setItemCompleted = (id) => {
    setItemStatus(items.map(item => {
      if(item.id == id)
        return {...item, completed: !item.completed}
      return item
    }))
  }

  return (
    <div className='border border-gray-400 border-opacity-20 rounded-lg inline-block'>
      <div className="flex items-center justify-between p-4 gap-20">
        <h3 className="text-xl font-semibold flex-1">Leg Workout</h3>
        <label className='flex items-center gap-2 rounded-lg px-3 py-2 tranisiton duration-200 bg-transparent hover:bg-gray-400 hover:bg-opacity-10 cursor-pointer' htmlFor="check-all">
          Check All
          <Checkbox id="check-all" />
        </label>
      </div>
      <div className="divider"></div>
      <div className='p-4'>
        <label htmlFor="item">
          <a className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 tranisiton duration-200 bg-transparent hover:bg-gray-400 hover:bg-opacity-10 cursor-pointer">
            <div className='flex items-center gap-3 justify-start'>
              <span>Leg Press</span>
              <span>4 x 12</span>
            </div>
            <Checkbox id="item" />
          </a>
        </label>
      </div>
    </div>
  )
}