import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { params } = router.query

  return <p>Post: {params}</p>
}

export default Post