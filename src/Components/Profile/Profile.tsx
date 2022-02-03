import React, { useState } from 'react';
import { Box, Avatar, Badge, Typography, Button } from '@mui/material'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store';
import userImage from '../../Assets/userImage.jpeg';
import './Profile.css'

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Profile = ({ }) => {
    return (
        <Box component="div" className='profilecontainer'>
            <Box className='avatarview'>
                <Box>
                    <Avatar
                        src={userImage}
                        sx={{ width: 110, height: 110, }}
                    />
                    <Typography variant="h6" color="#000"
                        style={{
                            fontFamily: 'cursive',
                            fontWeight: 'inherit',
                            textAlign: 'center',
                            marginTop: '10px'
                        }} >
                        Raphael
                    </Typography>
                </Box>
            </Box>
            <Box className='infoview'>
                <Box>
                    <Typography variant="h6" color="#000"
                        style={{
                            fontFamily: 'inherit',
                            fontWeight: 'inherit',
                            textAlign: 'center',
                            marginTop: '10px'
                        }} >
                        330
                    </Typography>
                    <Typography variant="body1" color="#a6a5a4"
                        style={{
                            fontFamily: 'inherit',
                            fontWeight: 'inherit',
                            textAlign: 'center',
                            marginTop: '4px',
                            fontSize: 13
                        }} >
                        posts
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" color="#000"
                        style={{
                            fontFamily: 'inherit',
                            fontWeight: 'inherit',
                            textAlign: 'center',
                            marginTop: '10px'
                        }} >
                        500k
                    </Typography>
                    <Typography variant="body1" color="#a6a5a4"
                        style={{
                            fontFamily: 'inherit',
                            fontWeight: 'inherit',
                            textAlign: 'center',
                            marginTop: '4px',
                            fontSize: 13
                        }} >
                        followers
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" color="#000"
                        style={{
                            fontFamily: 'inherit',
                            fontWeight: 'inherit',
                            textAlign: 'center',
                            marginTop: '10px'
                        }} >
                        190
                    </Typography>
                    <Typography variant="body1" color="#a6a5a4"
                        style={{
                            fontFamily: 'inherit',
                            fontWeight: 'inherit',
                            textAlign: 'center',
                            marginTop: '4px',
                            fontSize: 13
                        }} >
                        following
                    </Typography>
                </Box>
            </Box>
            <Box className="buttonview">
                <Button type="submit"
                    variant="contained"
                    sx={{
                        height: "40px",
                        width: "85%",
                        marginTop: '20px',
                        borderRadius: 1,
                        backgroundColor: "#3b5998",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: '#fff'
                    }}>
                    Follow
                </Button>
            </Box>
        </Box>
    );
};