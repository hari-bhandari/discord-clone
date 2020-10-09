import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import './Sidebar.css'
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
                        <ExpandMoreIcon/>
                        <h4>Test Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"/>
                </div>
            </div>
            <div className="sidebar__channelsList">

            </div>
        </div>
    );
};

export default Sidebar;