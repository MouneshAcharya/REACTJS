import { useContext, useRef } from "react"
import { SMContext } from "../store"

const CreatePost = () => {

  const postTitle = useRef('');
  const postContent = useRef('');
  const postReactions = useRef('');
  const postUserId = useRef('');
  const postTags = useRef('');

  const {onCreatePost} = useContext(SMContext)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const payload = {
      id: new Date(),
      title: postTitle.current.value,
      body: postContent.current.value,
      reactions: postReactions.current.value,
      userId: postUserId.current.value,
      tags: postTags.current.value.split(' ')
    }
    onCreatePost(payload)
    postTitle.current.value=''
    postContent.current.value=''
    postReactions.current.value=''
    postUserId.current.value=''
    postTags.current.value=''
  }


  return (
  <form onSubmit={(e) => onSubmitHandler(e)} className="sm-form">
  <div className="mb-3">
    <label htmlFor="exampleInputptitle" className="form-label">Post title</label>
    <input type="text" ref={postTitle} className="form-control" id="exampleInputptitle"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputpbody" className="form-label">Post Content</label>
    <input type="textarea" ref={postContent} className="form-control" id="exampleInputpbody"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputReactions" className="form-label">Reactions</label>
    <input type="text" ref={postReactions} className="form-control" id="exampleInputReactions"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputuserid" className="form-label">User Id</label>
    <input type="text" ref={postUserId} className="form-control" id="exampleInputuserid"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputtags" className="form-label">Tags</label>
    <input type="text" ref={postTags} className="form-control" id="exampleInputtags"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default CreatePost