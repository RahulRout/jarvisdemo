import React, { useState } from 'react';
import { HomeInterface } from '../../Interfaces';
import { Box, TextField, Input } from '@mui/material'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store';
import { posts } from '../../Service/postService'
import { Posts, Header, Profile, Suggestions } from '../../Components'
import './Home.css'
import { useEffect } from 'react';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Home = ({ }: HomeInterface) => {
    const digData = useAppSelector(state => state.appReducer);
    useEffect(() => {
        console.log("Home", digData)
    }, [])
    return (
        <Box component="header" className='container1'>
            <Header/>
            <Box component="div" className='content'>
                <Profile/>
                <Box style={{height:"auto",width:"auto"}}>
                    {posts.map((val: any) => {
                        return (
                            <Posts key={val.id} props={val} />
                        )
                    })}
                </Box>
                <Suggestions /> 
            </Box>
        </Box>
    );
};