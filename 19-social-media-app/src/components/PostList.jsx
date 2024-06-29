import { useContext, useEffect, useState } from "react"
import { SMContext } from "../store"
import Loading from "./Loading";
import Post from "./Post"

const PostList = () => {

  const controller =new AbortController();
  const signal = controller.signal;


  const [fetching,setFetching] = useState(true);

  const { onFetchPosts } = useContext(SMContext);
  useEffect(() => {
    console.log("use effect called...");
    const fetchData = async ()=> {
      const response = await fetch('https://dummyjson.com/posts',{signal})
      const result = await response.json();
      console.log(result)
      onFetchPosts(result)
      setFetching(false)
    }
    fetchData();

    return () => {
      console.log("cleaning...");
      controller.abort();
    }
  }, [])

  const {posts, onDeletePost} = useContext(SMContext)

  return (
    <>
    {fetching && <Loading/>}
    {posts.map((post) => <Post key={post.id} post={post} onDeletePost={onDeletePost} />)}
    </>
  )

}

export default PostList