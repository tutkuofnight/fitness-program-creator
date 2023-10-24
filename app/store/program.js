import { createSlice } from "@reduxjs/toolkit";
// import {createWrapper} from 'next-redux-wrapper'
import { collection as Collection, workoutProgramItem } from "@/utils/contants"
import { nanoid } from "nanoid"

const initialState = {
  name: "Example Program",
  type: 'workout',
  isPrivate: true,
  collections: []
}


const program = createSlice({
  name: 'program',
  initialState,
  reducers: {
    updateProgramName: (state , action) => state.name = action.payload,
    createCollection: (state, action) => {
      state.collections = [...state.collections, {
        id: nanoid(),
        ...Collection
      }]
    },
    removeCollection: (state, action) => state.collections = state.collections.filter(c => c.id !== action.payload),
    updateCollection: (state, action) => {
      state.collections = state.collections.map(col => {
        if(col.id == action.payload.id) {
          return {...Collection, [action.payload.key]: action.payload.value}
        }
        return col
      })
    },
    addItemInCollection: (state, action) => {
      state.collections = state.collections.map(collection => {
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
      state.collections = state.collections.map(collection => {
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
  updateProgramName,
  createCollection,
  updateCollection,
  removeCollection,
  addItemInCollection,
  removeItemFromCollection,
  updateItemInCollection
} = program.actions

export default program.reducer