import axios from 'axios'
import React, { useState } from 'react'
import './contact.css'
const Contact = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        message: '',
    })
    const postUserData = (e) => {
        let name = e.target.name
        let value = e.target.value
        setInput({
            ...input, [name]: value
        })
    }
    const submitForm = async () => {
        if (input.name && input.email && input.message) {
            const res = await axios.post('https://portfolio-contact-b1165-default-rtdb.firebaseio.com/userData.json', { input }, { Headers: { 'Content-Type': 'application/json' } })
            if (res) {
                alert('Message sent')
                setInput({
                    name: '', email: '', message: '',
                })
            } else {
                alert("couldn't send message ")
            }
        } else {
            alert("Fill the form please... ")
        }
    }
    return (
        <> <div className="home ">
            <div className="home_leftNright all_center coln_flex">
                <h2 className='_name'> Contact me</h2>
                This is how you can contact me. available 24x7. Feel free to get in touch.
                <div className="spacer_half"></div>
                <div className="contact all_center ">
                    <div className="cards coln_flex">
                        <div className="about_card all_center coln_flex cur hover">
                            <i className="fa-brands fa-linkedin-in marg05px"></i>
                            <h2>linkedIn</h2>
                            <p>send a message</p>
                        </div>
                        <div className="about_card all_center coln_flex cur hover">
                            <i className="fa-brands fa-twitter marg05px"></i>
                            <h2>twitter</h2>
                            <p>send a message</p>
                        </div>
                        <div className="about_card all_center coln_flex cur hover">
                            <i className="fa-brands fa-instagram marg05px"></i>
                            <h2>instagram</h2>
                            <p>send a message</p>
                        </div>
                    </div>

                    <div className=" all_center coln_flex">
                        <form action="" className='coln_flex contact_form' onSubmit={(e) => e.preventDefault()}>
                            <h2>contact me</h2>
                            <label htmlFor="name">
                                <input type="text" placeholder='Enter your name' className='contact_form_text'
                                    required
                                    name='name'
                                    value={input.name}
                                    onChange={postUserData}
                                />
                            </label>
                            <label htmlFor="email">
                                <input type="email/number" placeholder='Enter your Email/Number' className='contact_form_text'
                                    required
                                    name='email'
                                    value={input.email}
                                    onChange={postUserData}
                                />
                            </label>
                            <label htmlFor="message">
                                <textarea cols="25" rows="3" placeholder='Enter your message' className='contact_form_text'
                                    required
                                    name='message'
                                    value={input.message}
                                    onChange={postUserData}
                                >
                                </textarea>
                            </label>
                            <button className='btn'
                                onClick={submitForm}>send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            <div className="spacer_01"></div>
        </>
    )
}

export default Contact