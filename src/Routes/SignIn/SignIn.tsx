import React, { useState } from 'react';
import { SignInInterface } from '../../Interfaces';
import { Box, Typography, Button } from '@mui/material'
import { TextInput, NetButton } from '../../Components';
import { add } from '../../Redux/AppReducer'
import { TypedUseSelectorHook, useDispatch, useSelector, } from 'react-redux';
import type { RootState, AppDispatch } from '../../store';
import { users } from '../../Service/users';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const SignIn = ({ }: SignInInterface) => {

    // create state variables for each input
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const digData = useAppSelector(state => state.appReducer);
    let navigate = useNavigate()

    const handleSubmit = (e: any) => {
        if (email.length != 0 && password.length != 0) {
            if (email.includes('@')) {
                dispatch(add({ email: email, password: password }))
                navigate('./home')
            } else {
                alert("Enter valid email")
            }
        } else {
            alert("Can not submit empty form")
        }
    };

    return (
        <Box component="div" className="signincontainer">
            <Box component="div"
                sx={{
                    width: window.innerWidth,
                    height: window.innerHeight,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>

                <Box mt={15} component='form'
                    onSubmit={handleSubmit}
                    sx={{
                        width: "500px",
                        height: "600px",
                        backgroundColor: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: 2,
                    }}
                    noValidate
                    autoComplete="off">

                    <Typography variant="h2" color="#000"
                        style={{
                            paddingLeft: 20,
                            fontFamily: 'cursive',
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }} >
                        Jarvis
                    </Typography>

                    <TextInput
                        width={'400px'}
                        height={'55px'}
                        type={'email'}
                        onChange={(e: any) => setEmail(e.target.value)}
                        marginTop={50}
                        name={'Email'}
                        InputWidth={'100px'}
                        inputColor={'#000'}
                        border={'1px solid grey'}
                        backgroundColor={'#fff'} />

                    <TextInput
                        width={'400px'}
                        height={'55px'}
                        type={"password"}
                        onChange={(e: any) => setPassword(e.target.value)}
                        marginTop={10}
                        name={'Password'}
                        InputWidth={'100px'}
                        inputColor={'#000'}
                        border={'1px solid grey'}
                        backgroundColor={'#fff'} />

                    <Button type="submit"
                        variant="contained"
                        sx={{
                            height: "50px",
                            width: "400px",
                            marginTop: '20px',
                            backgroundColor: "#3b5998",
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: '#fff'
                        }}>
                        Signup
                    </Button>

                </Box>
            </Box>

        </Box >
    );
};


