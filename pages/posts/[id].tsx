import Link from 'next/link'
import { IPost } from '../models'
import getPosts from "@/server/get-posts"
import { useRouter } from 'next/router'

export default function Post() {
  const { posts } = getPosts()
  const router = useRouter()

  return (
    <div>
       <h1>Posts</h1>
       <Link href='/'>Home</Link>
      {posts.map((post: IPost) => (
        <div key={post.id}>
          <h1>{router.query.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}

      <Link href='/posts'>Posts</Link>
    </div>
  )
}
