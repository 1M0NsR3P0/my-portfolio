import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const [err, setErr] = useState('')
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        useEffect(()=>{

        },[])
    };
    // <Alert severity="success">Email sent successfully mr imon shaheb to you mongo db</Alert>


    return (
        <form onSubmit={handleSubmit(onSubmit)} className=''>
            <div className=''>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <input {...register("email", { required: true })} type="email" placeholder="Your Email" className="input input-bordered" />
                <span>{err}</span>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Tell Me More</span>
                </label>
                <textarea {...register("text", { required: true })} type="text" placeholder="More details" className="input input-bordered" />
                <span>{err}</span>
            </div>
            <input type="submit" className='btn btn-outline my-3 text-white' />
            </div>
        </form>
    );
};

export default Contact;