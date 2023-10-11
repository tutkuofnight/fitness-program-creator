import { createSlice } from "@reduxjs/toolkit";
import { collection,workoutProgramItem } from "@/utils/contants"
import { nanoid } from "nanoid"

const program = createSlice({
  name: 'program',
  initialState: {
    name: "Example Program",
    type: 'workout',
    isPrivate: true,
    collections: []
  },
  reducers: {
    createCollection: (state, action) => {
      state.collections = [...state.collections, {
        id: nanoid(),
        ...collection
      }]
    },
    removeCollection: (state, action) => state.collections.filter(c => c.id !== action.payload),
    updateCollection: (state, action) => {
      state.collections.map(collection => {
        if (collection.id == action.payload.id) {
          if (action.payload.key == 'name') return collection.updateName(value)
        }
        return collection
      })
    },
    addItemInCollection: (state, action) => {
      state.collections.map(collection => {
        if (collection.id == id)
          return {
            ...collection,
            items: [...collection.items, {
              id: nanoid(),
              ...workoutProgramItem
            }]
          }
        return collection
      })
    },
    removeItemFromCollection: (state, action) => {
      state.collections.map(collection => {
        if (collection.id == action.payload.id)
          return {
            ...collection,
            items: collection.items.filter(item => item.id !== action.payload.itemId)
          }
        return collection
      })
    }
  },
  updateItemInCollection: (state, action) => {
    state.collections = state.collections.map(collection => {
      if(collection.id == action.payload.colId){
        return {...collection , items: collection.items.map(collectionItem => {
          if(collectionItem.id == action.payload.itemId) return {...collectionItem, [key]: value}
          return collectionItem
        })}
      }
      return collection
    })
  }
})

export const {
  createCollection,
  updateCollection,
  removeCollection,
  addItemInCollection,
  removeItemFromCollection,
  updateItemInCollection
} = program.actions

export default program.reducer