import React from "react";
import PropTypes from 'prop-types';

function Post({ id, title, deletePost }) {
    return (
        <div className="Post">
            <button className="Post__delete" onClick={() => deletePost(id)}>X</button>
            <div className="Post__title"> { title } </div>

            {/* random รูปไปเรื่อยๆ **ตรง id จะทำให้เราได้รูปที่ต่างกัน */}
            <img 
                className="Post__image"
                src={`https://source.unsplash.com/random?sig=${id}`}
                alt=""
            />
        </div>
    )
}

Post.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
}

export default Post;