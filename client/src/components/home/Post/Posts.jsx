import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import { useSearchParams, Link } from 'react-router-dom';

import { API } from "../../../service/api";

import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts({ category: category || ''});
      if (response.isSuccess) {
        setPosts(response.data);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
    {
      posts && posts.length> 0 ? posts.map(post => {
        return (
          <Grid item lg={3} sm={4} xs={12}>
          <Link to={`details/${post._id}`} style={{ textDecoration: 'none', color:'inherit'}}>
            <Post post={post}/>
          </Link>
          </Grid>
        )
      }) : <div>No data available here.</div>
    }
    </>
  );
};

export default Posts;
