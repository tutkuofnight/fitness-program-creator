import { useState } from "react"
class Item {
  constructor(name , set, count){
    const [name, setName] = useState(name)
    const [set, setItemSet] = useState(set)
    const [count , setCount] = useState(count)
  }

  update(key , value){
    switch(key) {
      case 'name': 
        setName(value) 
      break
      case 'set':
        setItemSet(value)
      break
      case 'count':
        setCount(value)
      break
    }
  }
}

class Collection {
  constructor(name , programItems){
    this.name = name || ""
    this.programItems = programItems || []
  }

  update(key , value){
    this[key] = value
  }

  createItem(name , set , count){
    this.programItems.push(new Item(name , set , count))
  }

  removeItem(id){
    this.programItems.filter(item => item.id !== id)
  }

}

export default class Program {
  constructor(type){
    this.type = type || 'training'
    this.private = false
    this.collections = []
  }

  createCollection(){
    this.collections.push(new Collection())
    return this
  }

  removeCollection(id){
    this.collections.filter(item => item.id !== id)
  }

  setPrivate(){
    this.private = !this.private 
  }

}