import { describe, expect, it, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/vue'
import PostView from '@/views/PostView.vue'
import { client } from '@/services/postRepository'
import { flushPromises } from '@vue/test-utils'

describe('When component is rendered', () => {
  it('should show list of posts', async () => {
    vi.mock('@/services/postRepository', () => {
      const client = {
        getPosts: vi.fn(
          () =>
            new Promise((resolve) => {
              resolve({
                data: [
                  {
                    id: 1,
                    title: 'fake'
                  }
                ]
              })
            })
        )
      }

      return { client }
    })

    const { debug } = render(PostView)

    await flushPromises()

    debug()

    expect(client.getPosts).toBeCalledTimes(1)
  })

  it('should show list of posts 2', async () => {
    vi.mock('@/services/postRepository', () => ({
      client: {
        getPosts: vi.fn()
      }
    }))

    // client.getPosts.mockImplementation(
    //   async () =>
    //     await {
    //       data: [
    //         {
    //           id: 1,
    //           title: 'fake 2'
    //         }
    //       ]
    //     }
    // )

    client.getPosts.mockResolvedValueOnce({
      data: [
        {
          id: 2,
          title: 'fake 2'
        }
      ]
    })

    const { debug } = render(PostView)

    await flushPromises()

    debug()

    expect(client.getPosts).toBeCalledTimes(1)
  })
})
