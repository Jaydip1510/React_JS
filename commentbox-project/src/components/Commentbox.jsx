import React, { useState } from 'react';

const Commentbox = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!name.trim()) {
            errors.name = 'Name is required';
        }
        if (!comment.trim()) {
            errors.comment = 'Comment is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Name:', name);
            console.log('Comment:', comment);
            // Clear form fields
            setName('');
            setComment('');
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <h2>Comment Box</h2>
            <form onSubmit={handleSubmit}>
                <table border={2} align='center'  style={{height:200, width:300}}>
                    <div  className='mt-3'  >
                        <label style={{ color: 'black', width: 100 }} htmlFor="">Name:-</label>
                        <input
                           
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div><br />
                    <div>
                        <label style={{ color: 'black' }} htmlFor="">Comment:-</label>
                        <textarea
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        {errors.comment && <p className="error">{errors.comment}</p>}
                    </div>
                    <button type="submit">Submit</button>
                </table>
            </form>
        </div>
    );
};

export default Commentbox;