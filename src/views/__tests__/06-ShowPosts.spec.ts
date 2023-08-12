import '@testing-library/jest-dom'
import { describe, expect, it, vi } from 'vitest'
import { render, cleanup, waitFor, screen } from '@testing-library/vue'
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

    // Flush is not the best solution, better to use waitFor
    await flushPromises()

    // debug()

    expect(client.getPosts).toBeCalledTimes(1)
  })

  it('should show list of posts 2', async () => {
    // This example is bettter, I just create a vi.fn() and then mock it's resolved value.
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

    render(PostView)

    // it'll wait until the mock function has been called once.
    await waitFor(() => expect(client.getPosts).toHaveBeenCalledTimes(1))

    // using findBy I can await for it's appearence
    expect(await screen.findByText('fake 2')).toBeInTheDocument()
  })
})
