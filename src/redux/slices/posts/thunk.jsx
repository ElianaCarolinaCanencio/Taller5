import { createAsyncThunk } from '@reduxjs/toolkit'

import { useFetch } from '../../../utils/useFetch'
import { numberRandom } from '../../../utils/numberRandom'

export const getAllPosts = createAsyncThunk('posts/getAllPosts', async () => {
  try {
    const dataPost = await useFetch(
      'https://jsonplaceholder.typicode.com/posts'
    )
    const dataUser = await useFetch(
      'https://jsonplaceholder.typicode.com/users'
    )

    const data = dataPost.map((post) => {
      const { username } = dataUser.find((user) => user.id === post.userId)

      return {
        ...post,
        user: username,
        likes: numberRandom(),
        share: numberRandom(),
      }
    })

    return data
  } catch (error) {
    return error
  }
})
