import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const RequestInfoForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className='request-form-div'>
                <label className='request-form-label'>Name</label>
                <input className='request-form-input' type="text" name="user_name" />
            </div>
            <div className='request-form-div'>
                <label className='request-form-label'>Email</label>
                <input className='request-form-input' type="email" name="user_email" />
            </div>
            <div className='request-form-div'>
                <label className='request-form-label'>Message</label>
                <textarea className='request-form-textarea' name="message" />
            </div>
            <div className='request-form-button'>
                <button type="submit">Send</button>
            </div>
        </form>
    );
};