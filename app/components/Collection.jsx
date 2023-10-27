"use client"
import {useState} from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from './ui/button'
import { nanoid } from 'nanoid'
export default function Collection(){
  const [items , setItems] = useState([
    {
      id: nanoid(),
      name: 'Leg Press',
      set: '4',
      count: '10',
      completed: false
    },
    {
      id: nanoid(),
      name: 'Leg Press',
      set: '4',
      count: '10',
      completed: false
    },
    {
      id: nanoid(),
      name: 'Leg Press',
      set: '4',
      count: '10',
      completed: false
    },
    {
      id: nanoid(),
      name: 'Leg Press',
      set: '4',
      count: '10',
      completed: false
    },
    {
      id: nanoid(),
      name: 'Leg Press',
      set: '4',
      count: '10',
      completed: false
    },
    {
      id: nanoid(),
      name: 'Leg Press',
      set: '4',
      count: '10',
      completed: false
    },
    {
      id: nanoid(),
      name: 'Leg Press',
      set: '4',
      count: '10',
      completed: false
    },
    {
      id: nanoid(),
      name: 'Leg Press',
      set: '4',
      count: '10',
      completed: false
    },
  ])

  const completeItem = (id) => {
    setItems(items.map(item => {
      if(item.id == id)
        return {...item, completed: !item.completed}
      return item
    }))
  }

  const checkAll = (event) => {
    setItems(items.map(item => ({...item , completed: event})))
  }

  return (
    <div className='border border-gray-400 border-opacity-20 rounded-lg inline-block'>
      <div className="flex items-center justify-between p-4 gap-20">
        <h3 className="text-xl font-semibold flex-1">Leg Workout</h3>
        <Button variant="ghost" className="cursor-pointer">
          <label htmlFor="check-all" className='flex items-center gap-2'>
            Check All
            <Checkbox id="check-all" onCheckedChange={(e) => checkAll(e)} />
          </label>
        </Button>
      </div>
      <div className="divider"></div>
      <div className='p-4'>
        {
          items.map(item => (
            <Button variant="ghost" className="w-max flex cursor-pointer">
              <label htmlFor={item.id} className='flex justify-between items-center'>
                <div className='flex items-center gap-3 justify-start'>
                  <span className={item.completed && 'line-through'}>{item.name}</span>
                  <span className={item.completed && 'line-through'}>{item.set} x {item.count}</span>
                </div>
                <Checkbox id={item.id} checked={item.completed } onCheckedChange={() => completeItem(item.id)} />
              </label>
            </Button>
          ))
        }

      </div>
    </div>
  )
}