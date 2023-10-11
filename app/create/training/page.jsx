'use client'
import InputDropdown from "@/components/elements/InputDropdown"
import styles from './training.module.scss'
import { useState , useEffect } from "react"
import {FaPlus , FaX} from 'react-icons/fa6'
import {collection,workoutProgramItem, program , daylist} from "@/utils/contants"
import { nanoid } from "nanoid" 

let list = [] 
export default () => {
  const [days , setDays] = useState(daylist)
  const [programData , setProgramData] = useState(program)
  const [collectionList , setCollectionList] = useState(list)
  

  useEffect(() => {
    console.log(collectionList)
  } , [collectionList])

  useEffect(() => {
    console.log(program)
  } , [program])

  const selectDays = (day) => {
    setDays(days.map(item => {
      if(item == day) return {...day , selected: !item.selected}
      return item
    }))
  }

  const createCollection = () => setCollectionList([...collectionList, {id: nanoid(), ...collection}])
  const removeCollection = id => setCollectionList(collectionList.filter(item => item.id !== id))
  const updateCollection = (id, key, value) => {
    setCollectionList(collectionList.map(collection => {
      if(collection.id == id) {
        return {...collection, [key]: value}
      }
      return collection
    }))
  }
  const addItemInCollection = (id) => {
    setCollectionList(collectionList.map(collection => {
      if(collection.id == id)
        return {...collection, items: [...collection.items, {id: nanoid(), ...workoutProgramItem}]}
      return collection
    }))
  }
  const removeItemFromCollection = (collectionId,itemId) => {
    setCollectionList(collectionList.map(collection => {
      if(collection.id == collectionId)
        return {...collection, items: collection.items.filter(item => item.id !== itemId)}
      return collection
    }))
  }
  const updateItemInCollection = ({colId, itemId}, key , value) => {
    setCollectionList(collectionList.map(collection => {
      if(collection.id == colId){
        return {...collection , items: collection.items.map(collectionItem => {
          if(collectionItem.id == itemId) return {...collectionItem, [key]: value}
          return collectionItem
        })}
      }
      return collection
    }))
  }


  return (
    <div className="wrapper w-[1200px] mx-auto">
      <div className="flex justify-between mb-5">
        <div>
          <input placeholder="Prgoram Name" type="text" defaultValue={program.name} onChange={e => setProgramData({...programData, name: e})} className="bg-black p-2 text-lg outline-none border border-dotted border-white" />
        </div>
        <div className="flex gap-2 items-center">
          {days.map((day , index) => (
            <div key={index} onClick={() => selectDays(day)} className={`ticket ${day.selected && 'selected'}`}>{day.name}</div>
          ))}
        </div>
      </div>
      {collectionList.map((collection , index) => [
        <div key={index} className="p-3 border border-slate-300 rounded-lg mb-5">
          <div className="flex justify-between items-center">
            <div>
              <input placeholder="Collection Name" className="rounded-lg bg-black p-2 text-lg outline-none border border-dashed border-white" autoFocus type="text" defaultValue={collection.name} onChange={e => updateCollection(collection.id , 'name' , e.target.value)} />
            </div>
            <div>
              <button className="create-button" onClick={() => removeCollection(collection.id)}><FaX /></button>
            </div>
          </div>
          <br />
          {collection.items.map((item , i) => (
            <div key={i} className={`${styles.selectArea} gap-2 mb-4`}>
              <div className="w-100">
                <InputDropdown selectedData={(data) => updateItemInCollection({colId: collection.id, itemId: item.id}, 'name' , data)} />
              </div>
              <div className="justify-self-center w-100">
                <input className="input w-[100px]" type="number" placeholder="Set" onChange={(e) => updateItemInCollection({colId: collection.id, itemId: item.id}, 'set' , e.target.value.toString())} />
              </div>
              <div className="justify-self-center w-100">
                <input className="input w-[100px]" type="number" placeholder="Count" onChange={(e) => updateItemInCollection({colId: collection.id, itemId: item.id}, 'count' , e.target.value.toString())} />
              </div>
              <div className="justify-self-end w-100">
                <button onClick={() => removeItemFromCollection(collection.id,item.id)} className="p-3 border border-dashed border-blue-600 transition duration-200 rounded-lg hover:bg-blue-950 hover:bg-opacity-80">
                  <FaX />
                </button>
              </div>
            </div>
          ))}
            <div onClick={() => addItemInCollection(collection.id)} className="create-button">
              <FaPlus />
            </div>
        </div>
      ])}
      <br />
      <div onClick={() => createCollection()} className="create-button">
        <div className="flex flex-col items-center p-5">
          <div><FaPlus /></div>
          <h1 className="text-lg">Create Collection</h1>
        </div>
      </div>
    </div>
  )
}