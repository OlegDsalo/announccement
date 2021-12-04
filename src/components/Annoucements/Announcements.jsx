import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  Button, Col, Input, Row,
} from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import {
  SelectAllAnnouncementSelect,
  SelectFiltered, SelectIsFiltered,
} from '../../store/slice/announcement-selector';
import { deleteAnnouncement, filterAnnouncement } from '../../store/slice/announcement-slice';
import './Announcements.scss';

const Announcements = () => {
  const dispatch = useDispatch();
  const deleteHandler = (id) => () => dispatch(deleteAnnouncement({ id }));
  const announcements = useSelector(SelectAllAnnouncementSelect);
  const filtered = useSelector(SelectFiltered);
  const isFiltered = useSelector(SelectIsFiltered);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    dispatch(filterAnnouncement(value));
  };
  const items = isFiltered ? filtered : announcements;
  return (
    <Row className="announcements">
      <h1>Announcements </h1>
      <Input onChange={handleSearch} />
      {items.map((announcement) => (
        <Row justify="space-between" className="container" key={announcement.id} xs={23} sm={23} md={23} lg={11} xl={11} xxl={11}>
          <Col>
            <Link to={`/announcement/${announcement.id}`}>
              <Title level={3}>
                {announcement.title}
              </Title>
            </Link>
            <Paragraph>
              {announcement.dateAdded}
            </Paragraph>
            <Paragraph>
              {announcement.description}
            </Paragraph>
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
    </Row>
  );
};

export default Announcements;
