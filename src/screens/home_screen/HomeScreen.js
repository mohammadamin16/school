import React, {Component} from 'react';

import './styles.css'
import {Link} from "react-router-dom";

class HomeScreen extends Component{
    render() {
        return(
            <div className='home_screen'>
                <p className='title'>HomeScreen</p>
                <div className='options'>
                    <Link className='btn dashboard_btn' to={'/dashboard'} >Days List</Link>
                    <Link className='btn student_view_btn' to={'/student_view'}>Report</Link>
                </div>

            </div>
        )
    }
}



export default HomeScreen;
