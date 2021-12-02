import React from 'react';
import './Announcement.scss';
import {useDispatch, useSelector} from "react-redux";
import { deleteAnnouncement} from "../../store/slice/announcement-slice";
import {Link, useParams} from "react-router-dom";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {SelectAllAnnouncementSelect} from "../../store/slice/announcement-selector";

const Announcement = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const deleteHandler = (id) => {
        dispatch(deleteAnnouncement({id: id}));
    }
    const announcements = useSelector(SelectAllAnnouncementSelect);

    return (
        <div className='announcements'>
            {announcements.map(announcement =>
                <div className='container' key={announcement.id}>
                    <div className='announcement'>
                        <Link to={`/announcement/${announcement.id}`}>
                            <h2>{announcement.title}</h2>
                        </Link>
                        <p>{announcement.dateAdded}</p>
                        <p>{announcement.description}</p>
                        <Link to={`/announcement/${announcement.id}/edit`}><EditOutlined className='icon edit'/> </Link>
                        <button className=' icon delete' onClick={() => deleteHandler(announcement.id)}>
                            <DeleteOutlined/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Announcement;
