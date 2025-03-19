import React from "react";
import { useState } from "react";
import '../assets/styles/Contact.css';

const Contact:React.FC= () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    };
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');


    return (
        <div className="main-content">
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <h1>Contact Us</h1>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </form>
            </div>
        </div>
        
    );
}

export default Contact;