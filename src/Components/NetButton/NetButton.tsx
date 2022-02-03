import * as React from 'react';
import { Input, Button, Link } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';

export const NetButton = (props:any) => {
    return (
        <div style={{
            height: props.height,
            width: props.width,
            marginTop: props.marginTop,
            backgroundColor: props.backgroundColor,
            borderRadius:5,
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
            <Button onClick={props.onClick} sx={{height:'100%',width:'100%'}} >
                <text style={{color:'#fff', fontWeight:'bold'}}>{props.text}</text>
            </Button>
        </div>
    )
};
