import { AiFillDelete } from "react-icons/ai";

const Post = ({post, onDeletePost}) => {
const w18 ={
  width: "40rem"
}

const onDelPost= () => {
  console.log("post.userId ", post.userId)
  onDeletePost(post.userId)
}

  return (
  <div className="card sm-post-card" style={w18}>  
  <span onClick={() => {onDelPost()}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  <AiFillDelete />
  </span>
    <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    <div className="alert alert-primary d-flex align-items-center" role="alert">
  <div>
    This post reacted by {post.reactions.likes} people.
  </div>
</div>
    {post.tags.map(
      (tag) => <span key={tag} className="badge text-bg-primary sm-primary-badge">{tag}</span>
    )}
  </div>
</div>
  )
}

export default Post