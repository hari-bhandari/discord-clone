import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Sidebar.css'
import {ExpandMore} from "@material-ui/icons";
const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            <div className="sidebar__top">
                <h3>Discord</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;