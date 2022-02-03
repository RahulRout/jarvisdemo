import * as React from 'react';
import { Button, Input } from '@mui/material'
export const TextInput = (props:any) => {
    return (
        <div style={{
            height: props.height,
            width: props.width,
            marginTop: props.marginTop,
            backgroundColor: props.backgroundColor,
            border: props.border,
            borderRadius:5,
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
            <Input
                placeholder={props.name}
                onChange={props.onChange}
                type={props.type}
                aria-label={'description'}
                style={{ width: '90%', height: '100%', color: props.inputColor }}
                disableUnderline={true}></Input>
        </div>
    )
};
