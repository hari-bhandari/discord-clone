import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import './ChatHeader.css'
const ChatHeader = () => {
    return (
        <div className="chatHeader">
          <div className="chatHeader__left">
            <h3><span className="chatHeader__hash">#</span>Test Channel</h3>
          </div>
            <div className="chatHeader__right">
                <NotificationsIcon/>
                <EditLocationRoundedIcon/>
                <PeopleAltRoundedIcon/>
                <div className="chatHeader__search">
                    <input type="text" placeholder="Search"/>
                    <SearchRoundedIcon/>
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;