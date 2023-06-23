import { Typography, Box, styled } from '@mui/material'
import React from 'react'

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Heading = styled(Typography)`
  font-size: 70px;
  color: #FFFFFF;
  line-height: 1;
`
const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #FFFFFF;
`

const Banner = () => {
  return (
    <Image>
      <Heading>BLOG</Heading>
      <SubHeading>Coder</SubHeading>
    </Image>
  )
}

export default Banner