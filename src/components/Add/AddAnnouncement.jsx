import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import './AddAnnouncement.scss';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Title from 'antd/es/typography/Title';
import { addAnnouncement } from '../../store/slice/announcement-slice';

const AddAnnouncement = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addAnnouncementHandler = (data) => {
    const generateId = Math.floor(Math.random() * (1000 - 7) + 7);

    const newAnnouncement = {
      ...data,
      id: generateId,
    };
    dispatch(addAnnouncement(newAnnouncement));
    navigate('/');
  };
  return (
    <form className="form-add-anc" onSubmit={handleSubmit(addAnnouncementHandler)}>
      <h1>Add Announcement</h1>
      <label>
        <Title level={5}> Title:</Title>
        <input {...register('title', {
          required: true,
          maxLength: 30,
        })}
        />
        {errors.title && errors.title?.type === 'required' && (
          <span className="error" role="alert">This is required</span>
        )}
        {errors.title && errors.title?.type === 'maxLength' && (
          <span className="error" role="alert">Max length exceeded 30 </span>
        )}
      </label>
      <label>
        <Title level={5}>Description: </Title>
        <textarea {...register('description', { required: true })} />
        {errors.descriptio && <span className="error" role="alert">This is required</span>}
      </label>
      <label>
        <Title level={5}>Date added:</Title>
        <input
          type="date"
          min="2020-01-01"
          max="2025-01-01"
          {...register('dateAdded', {
            required: true,
          })}
        />
        {errors.dateAdded && <span className="error">This field is required</span>}
      </label>
      <button className="add-button" type="submit">
        <PlusOutlined />
      </button>
    </form>
  );
};

export default AddAnnouncement;
