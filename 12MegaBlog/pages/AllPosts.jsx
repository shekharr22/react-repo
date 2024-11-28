import React, {useState, useEffect} from 'react'
import { Containe, PostCard } from '../src/components'
import appwriteService from "../appwrite/config"

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts)) => setPosts
  return (
    <div>
      
    </div>
  )
}

export default AllPosts
