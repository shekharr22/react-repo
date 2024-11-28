import React, { useState, useEffect } from "react";
import { Container, Post, PostCard } from "../src/components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
}
return (
  <div className="w-full py-8">
    <Container>
      <div className="flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="w-1 p-2/4">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </Container>
  </div>
);

export default AllPosts;
