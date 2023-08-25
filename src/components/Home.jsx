import {
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit';

import { useState, useEffect } from 'react';
import { fetchAllPost } from '../services/Post';

import Card from "./Card";
import Navbar from "./Navbar"

export default function Home() {

  const [posts, setPost] = useState([]);
  const [postError, setPostError] = useState(false);
  const [loadedPost, setLoadedPost] = useState(false);
  const [logged, setLogged] = useState(false);

  const queryParams = new URLSearchParams(window.location.search)
  const username = queryParams.get("username")

  useEffect(() => {
    async function getPost() {
      try {
        const response = await fetchAllPost()
        setPost(response)
        setLoadedPost(true)
      } catch (error) {
        setPostError(error)
        setLoadedPost(false)
      }
    }

    getPost();

    if (localStorage.getItem(username)){
      console.log(localStorage.getItem(username))
      setLogged(true)
    }
    
  }, []);

  return (
    <>
      <Navbar />
      <MDBContainer className="mt-3">
        <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
          {
            loadedPost && !postError && (
              posts.map((post) => <Card key={post._id} logged={logged} post={post} /> )
            )
          }
        </MDBRow>
      </MDBContainer>
    </>
  );
}