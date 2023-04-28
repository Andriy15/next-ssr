import getPosts from "@/server/get-posts"
import { IPost } from "./models"
import Link from "next/link"

function Posts() {

    const { posts } = getPosts()

    return (
        <div>
            <h1>Posts Page</h1>
            <Link href='/'>Home</Link>
            <div>
                {posts.map((post: IPost) => (
                    <div key={post.id}>
                        <h1>{post.id}</h1>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Posts
