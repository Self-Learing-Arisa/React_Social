import React, { useState } from "react";
import PropTypes from 'prop-types'

function Input({ addPost }) {
    const [input, setInput] = useState('');

    //นิยมตั้งให้เหมือนกับ event ที่จะใช้
    function onChange(event) {
        setInput(event.target.value);
    }

    function onKeyDown(event) {
        const title = event.target.value;

        // ถ้ามีการกด enter เข้ามาเเละ title ไม่เป็นค่าว่าง ให้ทำการ add post
        if(event.key === 'Enter' && title) {
            addPost(title);
            setInput('');
        }
    }

    return (
        <div className="Input">
            {/* นิยมตั้งชื่อเเบบนี้กัน */}
            <div className="Input__header">Create Post</div>
            <input 
                className="Input__field"
                type="text"
                value={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    )

}

Input.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default Input;