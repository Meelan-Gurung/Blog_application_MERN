import React from 'react'
import {Box, styled, Typography} from "@mui/material"
import { Link} from 'react-router-dom';


const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`


const About = () => {
  return (
    <Box>
      <Banner />
      <Box>
      <Typography variant='h3'>MERN Project</Typography>
      <Typography>This is a blog application developed in MERN. This website allows you to post, edit, save and view your blog posts.
        <Box>
          <Link href="">Github</Link>
        </Box>
      </Typography>
      </Box>
    </Box>
  )
}

export default About