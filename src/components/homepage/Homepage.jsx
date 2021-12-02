import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button, Col, Input, Row,
} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  deleteAnnouncement,
  filterAnnouncement,
} from '../../store/slice/announcement-slice';
import './Homepage.scss';
import { SelectFiltered, SelectAllAnnouncementSelect, SelectIsFiltered } from '../../store/slice/announcement-selector';

const Homepage = () => {
  const announcements = useSelector(SelectAllAnnouncementSelect);
  const dispatch = useDispatch();

  const filtered = useSelector(SelectFiltered);
  const isFiltered = useSelector(SelectIsFiltered);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    dispatch(filterAnnouncement(value));
  };

  const deleteHandler = (id) => () => dispatch(deleteAnnouncement({ id }));
  const items = isFiltered ? filtered : announcements;
  return (
    <div className="homepage">
      <h1>Announcements </h1>
      <Input onChange={handleSearch} />
      {items.map((announcement) => (
        <Row justify="space-between" className="home-announcements" key={announcement.id}>
          <Link to={`/announcement/${announcement.id}`}>
            <h1 className="title">{announcement.title}</h1>
          </Link>
          <Col className="icon-block">
            <Link to={`/announcement/${announcement.id}/edit`}>
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
                className="icon"
                size="large"
              />
            </Link>
            <Button
              type="primary"
              onClick={deleteHandler(announcement.id)}
              shape="circle"
              icon={<DeleteOutlined />}
              className="icon"
              size="large"
            />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Homepage;