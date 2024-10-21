import { configureStore } from '@reduxjs/toolkit'
import postsSlice from '../slices/posts/postsSlice'

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
})
