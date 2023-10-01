'use client'
import InputDropdown from "@/components/elements/InputDropdown"
import styles from './training.module.scss'
import { useState , useEffect } from "react"
import {FaPlus , FaX} from 'react-icons/fa6'
import daylist from '@/utils/daylist'
import Program from "@/models/Program"
export default () => {
  const [days , setDays] = useState(daylist)
  const [program , setProgram] = useState(new Program())
  const [selectedData , setSelectedData] = useState('')
  const [collectionList , setCollectionList] = useState([])
  

  useEffect(() => {
    console.log(collectionList)
  } , [collectionList])

  useEffect(() => {
    console.log(program)
  } , [program])

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

  const createCollection = () => {
    const obj = program.createCollection()
    // console.log(obj)
    setProgram(obj)
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
      {/* {program.collections.map((collection , index) => [
        <div key={index} className="p-3 border border-slate-300 rounded-lg">
          <input type="text" defaultValue={collection.name} />
          <br />
          <pre>
            {collection.programItems}
          </pre>
          {collection.programItems.map((item , i) => (
            <div key={i} className={`${styles.selectArea} gap-2 mb-4`}>
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
                <button onClick={() => setProgram(item.filter(data => data !== item))} className="p-3 border border-dashed border-blue-600 transition duration-200 rounded-lg hover:bg-blue-950 hover:bg-opacity-80">
                  <FaX />
                </button>
              </div>
            </div>
          ))}
            <div onClick={() => setProgram([...program , {id: program.length + 1 , ...obj}])} className="create-button">
              <FaPlus />
            </div>
        </div>
      ])} */}
      <br />
      <div onClick={() => setProgram(program.createCollection())} className="create-button">
        <div className="flex flex-col items-center p-5">
          <div><FaPlus /></div>
          <h1 className="text-lg">Create Collection</h1>
        </div>
      </div>
    </div>
  )
}