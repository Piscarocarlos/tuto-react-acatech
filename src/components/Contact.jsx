import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    // functions for change states
    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changeMessage = (e) => {
        setMessage(e.target.value)
    }

    const sendMail = (e) => {
        e.preventDefault();

        let data = {
            from_name: name,
            from_email: email,
            message: message
        }

        emailjs.send("service_moi7yia", "template_ejxkxb7", data, "V0kFaZZm5rNh-0qN5");

        toast.success("Votre mail a été envoyé avec succès.");

        setEmail("")
        setName("")
        setMessage("")
        
    }


    return (
        <>
        <Toaster/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 mt-5">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Envoyez un message</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={sendMail}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Votre nom complet: </label>
                                        <input type="text" id="name" className="form-control" value={name} onChange={changeName} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Votre adresse e-mail: </label>
                                        <input type="email" id="email" className="form-control" value={email} onChange={changeEmail}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="message">Votre message: </label>
                                        <textarea id="message" className="form-control" value={message} rows="4" onChange={changeMessage}></textarea>
                                    </div>

                                    <button type='submit' className="btn btn-primary w-100 mt-3">Envoyer votre message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
