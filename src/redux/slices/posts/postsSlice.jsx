import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'
import reducers from './reducer'

import { getAllPosts } from './thunk'

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = [...action.payload]
        state.loading = false
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { viewMorePosts } = postsSlice.actions
export default postsSlice.reducer
