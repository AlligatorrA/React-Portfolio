import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_opnn1ql', 'template_1lq5ddc', form.current, 'H-HmfDqM57B1dVGAi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <> <div className="home ">
            <div className="home_leftNright all_center coln_flex">
                <h2 className='_name'> Contact me</h2>
                This is how you can contact me. available 24x7. Feel free to get in touch.
                <div className="spacer_half"></div>
                <div className="contact all_center ">
                    <div className="cards coln_flex">

                        <a className='contact_a' href="https://www.linkedin.com/in/anand-raj-b10599171/">
                            <div className="about_card all_center coln_flex cur hover">
                                <i className="fa-brands fa-linkedin-in marg05px"></i>
                                <h2>linkedIn</h2>
                                <p>send a message</p>
                            </div>
                        </a>
                        <a className='contact_a' href="https://twitter.com/messages/compose?recipient_id=@Aryakkhauj">
                            <div className="about_card all_center coln_flex cur hover">
                                <i className="fa-brands fa-twitter marg05px"></i>
                                <h2>twitter</h2>
                                <p>send a message</p>
                            </div>
                        </a>
                        <div className="about_card all_center coln_flex cur hover" onClick={() => window.location = 'mailto:anandraj143kick@gmail.com'}>
                            <i className="fa-solid fa-at marg05px"></i>
                            <h2>E-mail</h2>
                            <p>send a mail</p>
                        </div>
                    </div>

                    <div className=" all_center coln_flex">
                        <form ref={form} className='coln_flex contact_form' onSubmit={sendEmail}>
                            <h2 >contact me</h2>
                            <label htmlFor="name">
                                <input type="text" placeholder='Enter your name' className='contact_form_text'
                                    autoComplete='off'
                                    required
                                    name='name'
                                />
                            </label>
                            <label htmlFor="email">
                                <input type="email" placeholder='Enter your Email' className='contact_form_text'
                                    autoComplete='off'
                                    required
                                    name='email'
                                />
                            </label>
                            <label htmlFor="message">
                                <textarea cols="25" rows="3" placeholder='Enter your message' className='contact_form_text'
                                    required
                                    name='message'
                                >
                                </textarea>
                            </label>
                            <button className='btn'>send message</button>
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