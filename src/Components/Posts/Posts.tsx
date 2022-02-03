import React, { useState } from 'react';
import { Typography, Box, Avatar, TextField, InputAdornment } from '@mui/material'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store';
import { Comment } from '../Comments/Comments';
import './Posts.css'

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Posts = (props: any) => {
    const { username, text, comments, likes} = props.props
    const [posts, setPost] = useState(comments)
    const digData = useAppSelector(state => state.appReducer);
    const submitComment = (e: any) => {
        if (e.key === 'Enter' && e.target.value.length !== 0) {
            let newData = {
                commentId: Math.random(),
                username: digData.data.Email.slice(0, digData.data.Email.indexOf("@")),
                commentText: e.target.value
            }
            setPost([...posts, newData])
            e.target.value = ""
        }
    }
    return (
        <Box className="cardcontainer">
            <Box className="cardheader">
                <Avatar alt="Remy Sharp" src={props.props.image} style={{ marginLeft: 10 }} />
                <Typography variant="h6" color="#000" style={{ paddingLeft: 20, fontFamily: '-moz-initial' }} >
                    {username}
                </Typography>
            </Box>
            <Box style={{ height: '70%', width: '100%', display: 'flex', flexDirection: 'row' }}>
                <Box className="cardcontent" component="img" src={props.props.image}></Box>
                <Box className="cardcontent" >
                    <Box className="caption">
                        <Typography variant="body1" color="#000"
                            style={{
                                paddingLeft: 20,
                                fontFamily: '-moz-initial',
                                fontSize: 15,
                                textAlign: 'left',
                                fontWeight: 'bold'
                            }} >
                            {username}
                        </Typography>
                        <Typography variant="body1" color="#000"
                            style={{
                                paddingLeft: 20,
                                fontFamily: '-moz-initial',
                                fontSize: 15,
                                textAlign: 'left',
                                marginTop: '10px'
                            }} >
                            {text}
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="#000"
                        style={{
                            paddingLeft: 20,
                            fontFamily: 'sans-serif',
                            fontSize: 13,
                            textAlign: 'left',
                            color: "#a6a5a4"
                        }} >
                        {posts.length} comments
                    </Typography>
                    {posts.map((val: any) => {
                        return (<Comment key={val.commentId} props={val} />)
                    })}
                    <Box className="addcomment">
                        <TextField
                            onKeyDown={submitComment}
                            size="small"
                            placeholder="Comment"
                            id="filled-start-adornment"
                            sx={{ m: 1, width: '20ch' }}
                            variant="standard"
                        />
                    </Box>
                </Box>
            </Box>
            <Box className="cardheader">
                <Typography variant="body1" color="#000"
                    style={{
                        paddingLeft: 20,
                        fontFamily: 'sans-serif',
                        fontSize: 15,
                        textAlign: 'left',
                        color: "#a6a5a4"
                    }} >
                    {likes} likes
                </Typography>
            </Box>
        </Box>
    );
};