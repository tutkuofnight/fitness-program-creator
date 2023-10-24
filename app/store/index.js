import { configureStore } from "@reduxjs/toolkit"
import { program } from "./program"

const store = configureStore({
  reducer: {
    program
  }
})

export default store