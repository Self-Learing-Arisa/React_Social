import React, { useState } from 'react';
import './App.css';

import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';

let id = 1;

function App() {
  // useState จะ return [] ให้ posts เเละจะ return func ในการ set ค่าใหม่ของ posts ให้ setPosts
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    // newPost = {id: id, title:title} เเบบเต็มเป็นงี้
    const newPost = {id, title};
    setPosts([newPost, ...posts]); //เอา newPost ยัดเข้าไปใน array เเละกระจาย posts อันเก่าเข้าไปด้วย
    id += 1;
  }

  function deletePost(id) {
    const updatedPost = posts.filter((post) => post.id !== id);
    setPosts(updatedPost);
  }

  
  return (
    <div>
      <Navbar />
      <Input addPost={addPost} />

      {/* loop เเสดงเเต่ละ post ออกมา */}
      {posts.map((post) => {
        return <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost} />
      })}
    </div>
    
  );
}

export default App;
