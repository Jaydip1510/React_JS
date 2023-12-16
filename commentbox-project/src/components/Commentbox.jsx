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
      <form onSubmit={handleSubmit} style={{margin:50}}>
      <table border={2} align='center' className='mt-5 bg-warning' style={{height:250,width:400}}>
        <textarea
          rows={3}
          cols={40}
          className='mt-5'
          placeholder="Write your comment here..."
          value={comment}
          onChange={handleInputChange}
        ></textarea><br/><br/>
        <button className='btn btn-success' type="submit">Submit</button>
        </table>
      </form>

      <div>
        <h3>Comments</h3>
        {commentsList.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul>
            {commentsList.map((c, index) => (
              <p key={index}>{c}</p>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Commentbox;