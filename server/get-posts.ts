import { IPost } from "@/pages/models"
import { useEffect, useState } from "react"

export default function usePosts() {
  const [posts, setPosts] = useState<IPost[]>([])

  async function getServerSidePosts() {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await res.json()
      setPosts(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getServerSidePosts()
  }, [])

  return { posts }
}
