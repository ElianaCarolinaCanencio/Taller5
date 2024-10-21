import { Scroll } from 'lucide-react'
import CardPost from './components/CardPost'
import Header from './components/Header'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAllPosts } from './redux/slices/posts/thunk'

import { viewMorePosts } from './redux/slices/posts/postsSlice'

export default function App() {
  const { posts, loading, limitPosts } = useSelector((state) => state.posts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])

  const handleClickViewMore = () => {
    dispatch(viewMorePosts())
  }

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          Posts {limitPosts}
          <Scroll className="w-5 h-5" />
        </h2>

        <section className="flex flex-col gap-4 py-4">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            posts
              .slice(0, limitPosts)
              .map(({ id, userId, title, user, body, likes, share }) => (
                <CardPost
                  key={id}
                  id={id}
                  userId={userId}
                  title={title}
                  user={user}
                  body={body}
                  likes={likes}
                  share={share}
                />
              ))
          )}
        </section>

        <div className="flex justify-center pb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
            onClick={handleClickViewMore}
          >
            Ver más
          </button>
        </div>
      </main>
    </>
  )
}
