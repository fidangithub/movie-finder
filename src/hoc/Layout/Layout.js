import React from 'react';
import classes from "./Layout.css"

import MenuButton from "./../../components/MenuButton/MenuButton";
import Sidebar from "./../../containers/Sidebar/Sidebar";
import MainContent from "./../../containers/MainContent/MainContent"


const layout = props => {
    return (
        <div className={classes.Container}>
            <MenuButton />
            <Sidebar />
            <MainContent />
        </div>
    );
};


export default layout;
