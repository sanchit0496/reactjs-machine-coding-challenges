import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [clickedPost, setClickedPost] = useState(null);
  const [displayAddPostComment, setDisplayAddPostComment] = useState(false);

  const posts = [
    {
      id: 1,
      postData: "Post 01",
      comments: [
        {
          id: 1,
          commentData: "Comment 01",
        },
        {
          id: 2,
          commentData: "Comment 02",
        },
      ],
    },
    {
      id: 2,
      postData: "Post 02",
      comments: [
        {
          id: 1,
          commentData: "Comment 01",
        },
        {
          id: 2,
          commentData: "Comment 02",
        },
      ],
    },
  ];

  const clickPostComment = (post) => {
    setDisplayAddPostComment(true);
  };
  const addPostComment = (post) => {
    setClickedPost(post);
  };
  const closePostComment = (post) => {
    setDisplayAddPostComment(false);
  };
  console.log("displayAddPostComment", displayAddPostComment);
  return (
    <div className="App">
      Hello
      {posts.map((post) => {
        return (
          <div className="single-post">
            <div className="single-post-header">
              {post.postData}
              {!displayAddPostComment ? (
                <button onClick={() => clickPostComment(post)}>
                  Add Comment
                </button>
              ) : (
                <>
                  <input type="text" />
                  <button onClick={() => addPostComment(post)}>Add</button>
                  <button onClick={() => closePostComment(post)}>Close</button>
                </>
              )}
            </div>
            <div className="single-comment">
              {post.comments.map((comment) => {
                return <div>{comment.commentData}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
