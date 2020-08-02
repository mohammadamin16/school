import React, {useEffect} from 'react';
import './styles.css'
import {Link} from "react-router-dom";


export default function Header(props) {
    let auth;
    if (props.user == null){
        auth = (
            <div>
                <Link className='btn login_btn'
                    to={'/login'}>
                    Login
                </Link>
                <Link className='btn signup_btn'
                    to={'/signup'}>
                    SignUp
                </Link>
            </div>
        )
    }else{
        auth=(
            <div className='just_row'>
                <Link className='btn logout_btn'
                    onClick={() => {props.logout()}}
                    to={'/login'}>
                    Logout
                </Link>
                <p className='logout_btn'>{props.user.username}</p>
            </div>
        )
    }
    return (
        <div className='header'>
            {auth}
            <Link
                to='/'
                className='logo school'>School</Link>
        </div>
    )
}