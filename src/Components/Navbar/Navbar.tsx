import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
type Props = {}

//TODO explore the link should be active and color set to green


export default function Navbar({ }: Props) {

    const [color, setcolor] = useState('green')

    return (
        <div className='body'>
            <div className='container'>
                <div className="flex-body" >
                    <div>logo</div>
                    <div className='flex-nav'>
                        <div style={{
                            color: 'green'
                        }}>Explore</div>
                        <div>contact us</div>
                        <div style ={{
                            padding:"1rem",
                            borderRadius:"10px",
                            background: 'green',
                            color:"white"
                        }}>Login/Signup</div>
                    </div>
                    <div className='icon'><MenuIcon /></div>
                </div>
            </div>
        </div>
    )
}