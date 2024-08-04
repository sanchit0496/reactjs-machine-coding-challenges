import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [clickedPost, setClickedPost] = useState(null);
  const [clickedComment, setClickedComment] = useState(null);
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
              comments: []
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
          comments: [],
        });
      }
    });
    setData(data);
    closePostComment();
  };
  const closePostComment = (post) => {
    setClickedPost(null);
  };

  const handleClickComment = (e, comment) => {
    setClickedComment(comment);
  };

  const addCommentReply = (postId, comment) => {
    setClickedComment(null);
    let parentPost = data.filter((item) => item.id === postId);
    console.log("parentPost", parentPost);

    let parentComment = parentPost[0].comments.filter(
      (item) => item.id === comment.id
    );
    console.log("parentComment", parentComment);
    let newCommentObj = {
      id: uuidv4(),
      commentData: addedText,
      comments: [],
    };
    parentComment[0].comments.push(newCommentObj);
  };

  const closeCommentReply = (comment) => {
    setClickedComment(null);
  };

  const renderAllComments = (postId, comments) => {
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

              {clickedComment?.id !== comment.id ? (
                <button onClick={(e) => handleClickComment(e, comment)}>
                  Add Reply
                </button>
              ) : (
                <>
                  <input type="text" onChange={(e) => handleInputChange(e)} />
                  <button onClick={() => addCommentReply(postId, comment)}>
                    Add
                  </button>
                  <button onClick={() => closeCommentReply(comment)}>
                    Close
                  </button>
                </>
              )}

              {comment?.comments?.length > 0 &&
                renderAllComments(postId, comment.comments)}
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
              {renderAllComments(post.id, post.comments)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
