import { Box, Typography } from '@mui/material'
import './Header.css'

export const Header = (props: any) => {
    return (
        <Box className="headercontainer">
            <Box className="innerview">
                <Typography variant="h3" color="#000"
                    style={{
                        paddingLeft: 20,
                        fontFamily: 'cursive',
                        textAlign: 'left',
                        fontWeight: 'bold'
                    }} >
                    Jarvis
                </Typography>
                <Box component="div" className="middleview">
                    <Typography variant="body1" color="#a6a5a4"
                        style={{
                            paddingLeft: 20,
                            fontFamily: '-moz-initial',
                            textAlign: 'left',
                        }} >
                        Search
                    </Typography>
                </Box>
                <Box component="div" className="rightview"></Box>
            </Box>
        </Box>
    );
};