import { Box, Button, FormControl, InputBase, TextareaAutosize, styled } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { DataContext } from "../../context/DataProvider";
import { API } from "../../service/api";

const Container = styled(Box)(({ theme }) => ({
  margin: '50px 100px',
  [ theme.breakpoints.down('md') ] : {
    margin: 0
  }
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 25px;
`;

const TextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 50px;
  border: none;
  font-size: 18px;
  &:focus-visible {
    outline: none;
  }
`
const initialPost = {
  title: '',
  description: '',
  picture: '',
  username: '',
  categories: '',
  createdDate: new Date()
}


const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState('');
  const { account } = useContext(DataContext);
  const { id } = useParams();

  const url = post.picture ? post.picture : `https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80`;

  useEffect(() => {
    const fetchData = async () => {
      let response= await API.getPostById(id);
      if(response.isSuccess) {
        setPost(response.data);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    const getImg = async () => {
      if(file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        //API Call
        const response = await API.uploadFile(data);
        post.picture = response.data;
      }
    }
    getImg();
    post.categories = location.search?.split('=')[1] || 'All';
    post.username = account.username;

  }, [file]);
  
  const handleChange = (e) => {
    setPost({...post, [e.target.name] : e.target.value });
  }

  const updateBlogPost = async () => {
    let response = await API.updatePost(post);
    if(response.isSuccess) {
      navigate(`/details/${id}`);
    }
  }

  return (
      <Container>
        <Image src={url} alt="" />

        <StyledFormControl>
          <label htmlFor="fileInput">
            <AddCircleIcon />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])}/>
          <InputTextField name="title" placeholder="Title" value={post.title} onChange={(e) => handleChange(e)}/>
          <Button variant="contained" color="primary" onClick={() => updateBlogPost()}>
            Update
          </Button>
        </StyledFormControl>

        <TextArea minRows={5} placeholder="Write your Blog ..." name="description" onChange={(e) => handleChange(e)} value={post.description}/>

      </Container>
  );
};

export default Update;
