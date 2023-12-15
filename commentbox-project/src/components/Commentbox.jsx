import React, { useState } from 'react';

const Commentbox = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== '') {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{margin:50,}}>
      <table border={2} align='center' className='mt-5' style={{height:250,width:250}}>
        <textarea
          placeholder="Write your comment here..."
          value={comment}
          onChange={handleInputChange}
        ></textarea><br/><br/>
        <button type="submit">Submit</button>
        </table>
      </form>

      <div>
        <h3>Comments</h3>
        {commentsList.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul>
            {commentsList.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Commentbox;