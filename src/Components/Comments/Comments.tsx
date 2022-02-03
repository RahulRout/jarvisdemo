import React, { useState } from 'react';
import { Box, TextField, Input, Typography } from '@mui/material'
import "./Comments.css"

export const Comment = (props: any) => {
    const {username, commentText}= props.props
    return (
        <Box className="commentcaption">
            <Typography variant="body1" color="#000"
                style={{
                    paddingLeft: 20,
                    fontFamily: '-moz-initial',
                    fontSize: 12,
                    textAlign: 'left',
                    fontWeight: 'bold'
                }} >
                {username}
            </Typography>
            <Typography variant="body1" color="#000"
                style={{
                    paddingLeft: 10,
                    fontFamily: '-moz-initial',
                    fontSize: 12,
                    textAlign: 'left',
                }} >
                {commentText}
            </Typography>
        </Box>
    );
};