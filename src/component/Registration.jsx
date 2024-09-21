import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import './style.css'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Registration = () => {
    return (
        <div className="container">
            <div className="subcontainer">
                <div className='header'>
                    <div className='head'>Quick Registration
                    </div>
                    <div className="dort">
                        <div className='dot'></div>
                    </div>
                </div>
                <div className="form">
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className="label">
                            <TextField
                                id="standard-textarea"
                                label="Name"
                                placeholder="Enter your name here"
                                multiline
                                variant="standard"
                            />
                            <TextField
                                id="standard-textarea"
                                label="Contact No"
                                placeholder="Enter your contact here"
                                multiline
                                variant="standard"
                            />
                        </div>
                        <div className="label">
                            <TextField
                                id="standard-textarea"
                                label="Email"
                                placeholder="Enter your email here"
                                multiline
                                variant="standard"
                            />
                            <div className="checkbox">
                                <Checkbox
                                    {...label}
                                    defaultChecked
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                                <span>Keep me informed about upcoming property
                                    launches and exclusive offers.
                                </span>
                            </div>

                        </div>
                    </Box>
                    <button>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default Registration