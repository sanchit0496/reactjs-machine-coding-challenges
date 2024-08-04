import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [clickedPost, setClickedPost] = useState(null);
  const [displayAddPostComment, setDisplayAddPostComment] = useState(false);

  const posts = [
    {
      id: uuidv4(),
      postData: "Post 01",
      comments: [
        {
          id: uuidv4(),
          commentData: "Comment 01",
          comments: [
            {
              id: uuidv4(),
              commentData: "Reply 01",
            },
          ],
        },
        {
          id: uuidv4(),
          commentData: "Comment 02",
          comments: [],
        },
      ],
    },
    {
      id: uuidv4(),
      postData: "Post 02",
      comments: [
        {
          id: uuidv4(),
          commentData: "Comment 01",
          comments: [],
        },
        {
          id: uuidv4(),
          commentData: "Comment 02",
          comments: [],
        },
      ],
    },
  ];

  const [data, setData] = useState(posts);
  const [addedText, setAddedText] = useState("");

  const clickPostComment = (post) => {
    setClickedPost(post);
  };

  const handleInputChange = (e) => {
    setAddedText(e.target.value);
  };

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
    closePostComment();
  };
  console.log("clickedPost", clickedPost);
  const closePostComment = (post) => {
    setClickedPost(null);
  };

  const renderAllComments = (comments) => {
    console.log("renderAllComments", comments);
    if (comments.length === 0) {
      return null;
    }

    return (
      <div>
        {comments.map((comment) => {
          return (
            <div
              key={comment.id}
              className="single-comment"
              style={{ marginLeft: "20px" }}
            >
              {comment.commentData}
              <input type="text" onChange={(e) => handleInputChange(e)} />
              <button>Add</button>
              <button>Close</button>

              {comment?.comments?.length > 0 &&
                renderAllComments(comment.comments)}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="App">
      Hello
      {data.map((post) => {
        return (
          <div className="single-post">
            <div className="single-post-header">
              {post.postData}
              {clickedPost?.id !== post.id ? (
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
            <div className="comment-box">
              {renderAllComments(post.comments)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
