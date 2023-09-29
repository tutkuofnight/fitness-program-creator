class Item {
  constructor(name , set, count){
    this.name = name
    this.set = set
    this.count = count
  }

  update(key , value){
    this[key] = value
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
  }

  removeCollection(id){
    this.collections.filter(item => item.id !== id)
  }

  setPrivate(){
    this.private = !this.private 
  }

}