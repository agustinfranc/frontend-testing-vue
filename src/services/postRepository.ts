import type { AxiosResponse } from 'axios'
import instance from './httpClient'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const client = {
  getFakePosts() {
    return new Promise((resolve) => {
      resolve({
        data: [
          {
            id: 1,
            title: 'real'
          }
        ]
      })
    })
  },

  getPosts() {
    return instance.get('posts')
  }
}

export { client }
