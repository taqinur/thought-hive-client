import React from 'react';

const PostStatus = () => {
    return (
        <div>
            <h2 className='mt-8 text-2xl mx-32'>Share Hub</h2>
            <textarea className="textarea textarea-accent w-3/6 mt-6 mx-32" placeholder="Share your thoughts!"></textarea>
            <input type="file" className="file-input file-input-bordered file-input-accent w-72 max-w-xl mx-32" /> <br />
            <button className="btn btn-accent mx-32 mt-4">Post Now!</button>
        </div>
    );
};

export default PostStatus;