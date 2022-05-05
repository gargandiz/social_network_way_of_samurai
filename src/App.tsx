import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import classes from "./components/Profile/MyPosts/Post/Post.module.css";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Profile/>
                {/*<Dialogs />*/}
            </div>

        </div>
    );
}

export default App;
