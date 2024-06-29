import { createContext, useReducer } from "react";

const defaultPost = [{
  id: 1,
  title: "Going to kundapura",
  body: "Full excited and thrilling experience in kundapura",
  reactions: 2,
  userId: "user-123",
  tags: ["Beach","Fish"]
},{
  id: 2,
  title: "Going to kundapura",
  body: "Full excited and thrilling experience in kundapura",
  reactions: 2,
  userId: "user-123",
  tags: ["Beach","Fish"]
},{
  id: 3,
  title: "Going to kundapura",
  body: "Full excited and thrilling experience in kundapura",
  reactions: 2,
  userId: "user-123",
  tags: ["Beach","Fish"]
}]

export const SMContext = createContext({
  "posts": [],
  "onCreatePost": () => {},
  "onDeletePost": () => {},
  "onFetchPosts": () => {}
})

const reducer = (prevPosts, action) => {
  console.log("reducer fns ",action.type);
  let postList = prevPosts;
  if(action.type === "ADD"){
    postList =[...prevPosts, action.payload]
  }
  else if(action.type === "DELETE"){
    let post = [...prevPosts]
    postList = post.filter((p) => p.userId !== action.userId)
  } else if(action.type === "ADD_POSTS"){
    postList = [...action.payload.posts]
  }
  return postList;

}


const SMProvider = ({children}) => {

  const [posts,dispatchEvent] = useReducer(reducer,[])

  const onCreatePost = (payload) => {
    dispatchEvent({
      type: "ADD",
      payload:payload
    })
  }

  const onDeletePost =  (userId) => {
    dispatchEvent({
      type: "DELETE",
      userId: userId
    })
  }

  const onFetchPosts = (posts) => {
    dispatchEvent({
      type:"ADD_POSTS",
      payload: posts
    })
  }

  return (
    <SMContext.Provider value={{posts:posts,
    onCreatePost: (payload) => {onCreatePost(payload)},
    onDeletePost: (userId) => {onDeletePost(userId)},
    onFetchPosts: (posts) => {onFetchPosts(posts)}
    }}>
      {children}
    </SMContext.Provider>
  )


}

export default SMProvider