import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    deleteAnnouncement,
    filterAnnouncement,
} from "../../store/slice/announcement-slice";
import './Homepage.scss'
import {Link} from "react-router-dom";
import {Input} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {SelectFiltered, SelectAllAnnouncementSelect, SelectIsFiltered} from "../../store/slice/announcement-selector";

const Homepage = () => {
    const announcements = useSelector(SelectAllAnnouncementSelect);
    const dispatch = useDispatch();

    const filtered = useSelector(SelectFiltered);
    const isFiltered = useSelector(SelectIsFiltered);

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        dispatch(filterAnnouncement(value));
    }

    const deleteHandler = (id) => {
        dispatch(deleteAnnouncement({id: id}));
    }

    return (
        <div className='homepage'>
            <h1>Announcements </h1>
            <Input onChange={(event) => handleSearch(event)}/>
            {!isFiltered ?
                (announcements.map(announcement => (
                    <div className='home-announcements' key={announcement.id}>
                        <Link to={`/announcement/${announcement.id}`}>
                            <h1 className='title'>{announcement.title}</h1>
                        </Link>
                        <div className='icon-block'>
                            <Link to={`/announcement/${announcement.id}/edit`}><EditOutlined className='icon edit'/>
                            </Link>
                            <button className='icon delete' onClick={() => deleteHandler(announcement.id)}>
                                <DeleteOutlined/>
                            </button>
                        </div>
                    </div>
                )))
                :
                (filtered.map(announcement => (
                    <div className='home-announcements' key={announcement.id}>
                        <Link to={`/announcement/${announcement.id}`}>
                            <h1 className='title'>{announcement.title}</h1>
                        </Link>
                        <div className='icon-block'>
                            <Link to={`/announcement/${announcement.id}/edit`}><EditOutlined className='icon edit'/>
                            </Link>
                            <button className='icon delete' onClick={() => deleteHandler(announcement.id)}>
                                <DeleteOutlined/>
                            </button>
                        </div>
                    </div>
                )))
            }
        </div>
    )
};

export default Homepage;
