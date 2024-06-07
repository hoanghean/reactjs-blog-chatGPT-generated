import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Hoàng",
      message: "XIn chào tôi là Hoàng",
      timestamp: new Date(),
    },
    {
      username: "Phi",
      message: "Tôi thích linh tinh",
      timestamp: new Date(),
    },
    {
      username: "Hùng",
      message: "Thí đi 1 mình",
      timestamp: new Date(),
    },
    {
      username: "Hoàng Phi Hùng",
      message: "Là tên đầy đủ của tôi",
      timestamp: new Date(),
    },
  ]);
  return (
    <div>
      <Navbar />
      <h1>NextJS blog | Hoàng Phi Hùng</h1>
      <div className="posts">
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            message={post.message}
            timestamp={post.timestamp}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
