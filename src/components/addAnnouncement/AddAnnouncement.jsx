import React from 'react';
import {useDispatch} from "react-redux";
import {addAnnouncement} from "../../store/slice/announcement-slice";
import {useForm} from "react-hook-form";
import './AddAnnouncement.scss'
import {PlusOutlined} from "@ant-design/icons";
import {useNavigate} from 'react-router-dom';

const AddAnnouncement = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addAnnouncementHandler = (data) => {
        const generateId = Math.floor(Math.random() * (1000 - 7) + 7);

        const newAnnouncement = {...data, id: generateId};
        dispatch(addAnnouncement(newAnnouncement));
        navigate('/');
    }
    return (
        <form className='form-add-anc' onSubmit={handleSubmit(addAnnouncementHandler)}>
            <h1>Add Announcement</h1>
            <label>
                Title:
                <input {...register('title', {required: true})}/>
                {errors.title && <span>This field is required</span>}
            </label>
            <label>
                Description:
                <textarea {...register('description', {required: true})}/>
                {errors.description && <span>This field is required</span>}
            </label>
            <label>
                Date added:
                <input type='number' {...register('dateAdded', {required: true})}/>
                {errors.dateAdded && <span>This field is required</span>}
            </label>
            <button className='add-button' type='submit'>
                <PlusOutlined/>
            </button>
        </form>
    );
};

export default AddAnnouncement;
