import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {
  similarAnnouncement,
  getAnnouncementById,
} from '../../store/slice/announcement-slice';
import { SelectSimilar, SelectSingle } from '../../store/slice/announcement-selector';
import './SingleAnnouncement.scss';

const SingleAnnouncement = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  dispatch(getAnnouncementById(Number(id)));
  const announcement = useSelector(SelectSingle);
  dispatch(similarAnnouncement({ title: announcement.title, id: announcement.id }));

  const similar = useSelector(SelectSimilar);
  return (
    <div className="single-announcements">
      <div className="single-announcement">
        <h2>
          Title:
          {announcement.title}
        </h2>
        <p>
          Date added:
          {announcement.dateAdded}
        </p>
        <p>{announcement.description}</p>
        <Link to={`/announcement/${id}/edit`}>
          <Button className="icon" type="primary" shape="circle" icon={<EditOutlined />} />
        </Link>
      </div>
      {similar.length === 0 ? null
        : (
          <>
            <h1>Similar Announcements</h1>
            {similar.map((item) => (
              <div className="similar-announcement" key={item.id}>
                <h2>
                  Title:
                  {item.title}
                </h2>
                <p>
                  Date added:
                  {item.dateAdded}
                </p>
                <p>{item.description}</p>
              </div>
            ))}
          </>
        )}
    </div>
  );
};

export default SingleAnnouncement;
