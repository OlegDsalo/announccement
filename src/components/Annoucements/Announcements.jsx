import React from 'react';
import './Announcements.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { SelectAllAnnouncementSelect } from '../../store/slice/announcement-selector';
import { deleteAnnouncement } from '../../store/slice/announcement-slice';

const Announcements = () => {
  const dispatch = useDispatch();
  const deleteHandler = (id) => () => dispatch(deleteAnnouncement({ id }));
  const announcements = useSelector(SelectAllAnnouncementSelect);

  return (
    <div className="announcements">
      {announcements.map((announcement) => (
        <Row justify="space-between" className="container" key={announcement.id}>
          <Col className="announcement">
            <Link to={`/announcement/${announcement.id}`}>
              <h2>
                Title:
                &nbsp;
                {announcement.title}
              </h2>
            </Link>
            <p>
              Date added:
              &nbsp;
              {announcement.dateAdded}
            </p>
            <p>
              Description:
              &nbsp;
              {announcement.description}
            </p>
          </Col>
          <Col className="icon-block">
            <Link to={`/announcement/${announcement.id}/edit`}>
              <Button
                className="icon"
                type="primary"
                size="large"
                shape="circle"
                icon={<EditOutlined />}
              />
            </Link>
            <Button
              className="icon"
              type="primary"
              onClick={deleteHandler(announcement.id)}
              size="large"
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Announcements;
