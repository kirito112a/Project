import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [contact, setContact] = useState('');

    // ฟังก์ชันสำหรับส่งข้อความไปยัง LINE Notify ผ่าน proxy server
    const proxyURL = process.env.REACT_APP_PROXY_URL || "http://localhost:4000/send-line-notify"; // ใช้ environment variable

    const sendToLine = async (e) => {
        e.preventDefault();
        const token = '1VYfSRCul7KbZbK2nv790zYcFdzpo8hPLSFLhrmuLRt';
        const messageText = `ชื่อ: ${name || 'ไม่มีข้อมูล'}\nข้อความ: ${message || 'ไม่มีข้อมูล'}\nช่องทางการติดต่อ: ${contact || 'ไม่มีข้อมูล'}`;
    
        try {
            const response = await axios.post(proxyURL, {
                token,
                message: messageText,
            });
    
            alert('Message sent to LINE successfully!');
            setName('');
            setMessage('');
            setContact('');
        } catch (error) {
            console.error("Failed to send message:", error);
            alert('Failed to send message to LINE');
        }
    };
    

    return (
        <section id="contact" className="site-section section-form text-center contact">
            <div className="container">
                <h1 className='font_stoke'>Contact</h1>
                <form onSubmit={sendToLine}>
                    <div className="row">
                        <div className="col-sm-4">
                        <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-sm-12">
                            <textarea
                                name="message"
                                id="message"
                                className="form-control"
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Callback Contact Information"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-border btn-outline-light send_message">
                    

                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
