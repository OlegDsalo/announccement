import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    similarAnnouncement,
    singleAnnouncement,
} from "../../store/slice/announcement-slice";
import {EditOutlined} from "@ant-design/icons";
import './SingleAnnouncement.scss'
import {SelectSimilar, SelectSingle} from "../../store/slice/announcement-selector";

const SingleAnnouncement = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    dispatch(singleAnnouncement(Number(id)));
    const announcement = useSelector(SelectSingle);
    dispatch(similarAnnouncement({title: announcement.title, id: announcement.id}));


    const similar = useSelector(SelectSimilar);
    console.log('render')

    return (
        <div className='single-announcements'>
            <div className='single-announcement'>
                <h2>Title: {announcement.title}</h2>
                <p>Date added: {announcement.dateAdded}</p>
                <p>{announcement.description}</p>
                <Link to={`/announcement/${id}/edit`}>
                    <EditOutlined className='edit-icon' width={'5em'} height={100}/>
                </Link>
            </div>
            {similar.length === 0 ? null :
                <>
                    <h1>Similar Announcements</h1>
                    {similar.map(item =>
                        <div className='similar-announcement' key={item.id}>
                            <h2>Title: {item.title}</h2>
                            <p>Date added: {item.dateAdded}</p>
                            <p>{item.description}</p>
                        </div>
                    )}
                </>
            }
        </div>
    );
};

export default SingleAnnouncement;
