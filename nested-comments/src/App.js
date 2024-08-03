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

  const [data, setData] = useState(posts);
  const [addedText, setAddedText] = useState('')

  const clickPostComment = (post) => {
    setDisplayAddPostComment(true);
  };

  const handleInputChange = (e) => {
    setAddedText(e.target.value)
  }

  const addPostComment = (post) => {
    setClickedPost(post);
    data.forEach((item) => {
      if (item.id === post.id) {
        item.comments.push({
          id: item.comments.length + 1,
          commentData: addedText,
        });
      }
    });
    setData(data);
    closePostComment()
  };
  console.log("data", data);
  const closePostComment = (post) => {
    setDisplayAddPostComment(false);
  };
  return (
    <div className="App">
      Hello
      {data.map((post) => {
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
                  <input type="text" onChange={(e) => handleInputChange(e)} />
                  <button onClick={() => addPostComment(post)}>Add</button>
                  <button onClick={() => closePostComment(post)}>Close</button>
                </>
              )}
            </div>
            <div className="single-comment">
              {post.comments.map((comment) => {
                return <div  key={comment.id}>{comment.commentData}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
