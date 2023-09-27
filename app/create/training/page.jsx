'use client'
import InputDropdown from "@/components/elements/InputDropdown"
import styles from './training.module.scss'
import { useState , useEffect } from "react"
import {FaPlus , FaX} from 'react-icons/fa6'
import daylist from '@/utils/daylist'
export default () => {
  const [days , setDays] = useState(daylist)
  const obj = {
    name: '',
    set: '',
    count: ''
  }
  const [program , setProgram] = useState([{id: 1 , ...obj}])
  const [selectedData , setSelectedData] = useState('')
  
  useEffect(() => {
    console.log(days)
  } , [days])

  const addSet = (id , value) => {
    setProgram(program.map(item => {
      if(item.id == id)
        return {...item, set: value}
      return item
    }))
  }

  const addCount = (id, value) => {
    setProgram(program.map(item => {
      if(item.id == id)
        return {...item, count: value}
      return item
    }))
  }

  const selectDays = (day) => {
    setDays(days.map(item => {
      if(item == day) return {...day , selected: !item.selected}
      return item
    }))
  }

  return (
    <div className="wrapper w-[1200px] mx-auto">
      <div className="flex justify-between mb-5">
        <h1 className="text-xl">Create Training Program</h1>
        <div className="flex gap-2 items-center">
          {days.map((day , index) => (
            <div key={index} onClick={() => selectDays(day)} className={`ticket ${day.selected && 'selected'}`}>{day.name}</div>
          ))}
        </div>
      </div>
      {program.map((item , id) => (
        <div key={id} className={`${styles.selectArea} gap-2 mb-4`}>
          <div className="w-100">
            <InputDropdown selectedData={(data) => setSelectedData(data)} />
          </div>
          <div className="justify-self-center w-100">
            <input className="input w-[100px]" type="number" placeholder="Set" onChange={(e) => addSet(item.id , e.target.value.toString())} />
          </div>
          <div className="justify-self-center w-100">
            <input className="input w-[100px]" type="number" placeholder="Count" onChange={(e) => addCount(item.id , e.target.value.toString())} />
          </div>
          <div className="justify-self-end w-100">
            <button onClick={() => setProgram(program.filter(data => data !== item))} className="p-3 border border-dashed border-blue-600 transition duration-200 rounded-lg hover:bg-blue-950 hover:bg-opacity-80">
              <FaX />
            </button>
          </div>
        </div>
      ))}
      <div onClick={() => setProgram([...program , {id: program.length + 1 , ...obj}])} className="grid place-items-center border border-dashed border-slate-400 rounded-lg p-3 cursor-pointer transition duration-200 hover:bg-slate-50 hover:bg-opacity-5">
        <FaPlus />
      </div>
    </div>
  )
}