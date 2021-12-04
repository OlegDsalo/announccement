import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import { Button, Row, Col } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
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
    <Row className="single-announcements" xs={23} sm={23} md={23} lg={11} xl={11} xxl={11}>
      <Col className="single-announcement">
        <Title level={4}>
          {announcement.title}
        </Title>
        <Paragraph>
          {announcement.dateAdded}
        </Paragraph>
        <Paragraph>{announcement.description}</Paragraph>
        <Link to={`/announcement/${id}/edit`}>
          <Button className="icon" type="primary" size="large" shape="circle" icon={<EditOutlined />} />
        </Link>
      </Col>
      {similar.length === 0 ? null
        : (
          <Col className="similar-announcements">
            <h1>Similar Announcements</h1>
            {similar.map((item) => (
              <div className="similar-announcement" key={item.id}>
                <Title level={4}>
                  {item.title}
                </Title>
                <Paragraph>
                  {item.dateAdded}
                </Paragraph>
                <Paragraph>{item.description}</Paragraph>
              </div>
            ))}
          </Col>
        )}
    </Row>
  );
};

export default SingleAnnouncement;
