import React from 'react'
import {
    Typography,
    Button,
} from '@material-ui/core';

const PushButton = ({ text, color, onClick }) => {
    return (
        <div className='fancyPushButton'>
            <Button onClick={onClick} class={`${color} loading-button`} >
                <Typography variant='h4' align='center'>
                    {text}
                </Typography>
            </Button>
        </div>
    )
}

export default PushButton;