import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    similarAnnouncement,
    SelectedSimilar,
    singleAnnouncement,
    singleSelect
} from "../../store/slice/announcement-slice";
import {EditOutlined} from "@ant-design/icons";
import './SingleAnnouncement.scss'

const SingleAnnouncement = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    dispatch(singleAnnouncement(Number(id)));
    const announcement = useSelector(singleSelect);
    dispatch(similarAnnouncement({title: announcement.title, id: announcement.id}));

    const similar = useSelector(SelectedSimilar);

    return (
        <div className='single-announcements'>
            <div className='single-announcement'>
                <h2>Title:{announcement.title}</h2>
                <p>Date added:{announcement.dateAdded}</p>
                <p>{announcement.description}</p>
                <Link to={`/announcement/${id}/edit`}>
                    <EditOutlined className='edit-icon' width={'5em'} height={100}/>
                </Link>
            </div>
            {similar.length === 0 ? null :
                <>
                    <h1>Similar Announcements</h1>
                    {similar.map(item =>
                        <div className='single-announcement' key={item.id}>
                            <Link to={`/announcement/${announcement.id}`}>
                                <h2>Title:{item.title}</h2>
                            </Link>
                            <p>Date added:{item.dateAdded}</p>
                            <p>{item.description}</p>
                        </div>
                    )}
                </>
            }
        </div>
    );
};

export default SingleAnnouncement;
