import React, {useEffect} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import './Sidebar.css'
import SidebarChannel from "./SidebarChannel";
import {Avatar} from "@material-ui/core";
import {selectUser} from "../../../features/userSlice";
import {useSelector} from "react-redux";
import db,{auth} from "../../../firebase/firebase";
const Sidebar = () => {
    const [channels, setChannels] = useState([]);

    const user = useSelector(selectUser);
    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map((doc) => ({
                id: doc.id,
                channel: doc.data(),

            })))
        ))
    }, [])

    const handleAddChannel = () => {
        const channelName = prompt("Enter a new Channel Name");

        if (channelName) {
            db.collection("channels").add({
                channelName: channelName,

            });
        }
    }
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
                <div className="sidebar__channelsList">
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize={"large"}/>
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar/>
                <div className="sidebar__profileInfo">
                    <h3>Hari</h3>
                    <p>hari_bhan</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;