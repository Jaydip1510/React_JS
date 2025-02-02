import React, { useState } from 'react';

const ResponseForm = ({ bidNumber }) => {
  const [userInfo, setUserInfo] = useState('');
  const [responseContent, setResponseContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!userInfo || !responseContent) {
      setError('Please fill out all fields.');
      return;
    }

    // In a real-world application, you'd send the response to the backend here
    console.log('Submitted response:', { bidNumber, userInfo, responseContent });

    // Clear form after submission
    setUserInfo('');
    setResponseContent('');
    setError('');
  };

  return (
    <div>
      <h3>Submit Your Response</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Info</label>
          <input
            type="text"
            value={userInfo}
            onChange={(e) => setUserInfo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Response</label>
          <textarea
            value={responseContent}
            onChange={(e) => setResponseContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Response</button>
      </form>
    </div>
  );
};

export default ResponseForm;
