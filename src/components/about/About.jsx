import React from 'react'
import './about.css'
import avatar from '../../assets/profile.png'
import resume from '../../assets/resume.pdf'
const About = () => {
    return (
        <>
            <div className="home ">
                <div className="home_leftNright">
                    <h2 className='_name'>About Me</h2>
                </div>
                <div className="home_left ">
                    <picture className='home_images_box cur'>
                        <img className='avatar hover box_shadow' src={avatar} alt="profile_pic" loading='lazy' />
                    </picture>
                </div>
                <div className="home_right align_center coln_flex">
                    <h1 className='_name'>I'm `Anand Raj`</h1>
                    I have been learning JavaScript and React since past 1year and made 20+ projects, also here to learn and get experience on the basis of proof of work.

                    <div className="experiences_card_parent all_center">
                        {/* <div className="spacer_half"></div> */}
                        <div className="experiences_card_child1 all_center">
                            <p>Full Name: </p>
                        </div>
                        <div className="experiences_card_child2 all_center">
                            <p>Anand Kumar Jha </p>
                        </div>
                        <div className="experiences_card_child1 all_center">
                            <p>Age: </p>
                        </div>
                        <div className="experiences_card_child2 all_center">
                            <p>21 </p>
                        </div>
                        <div className="experiences_card_child1 all_center">
                            <p>Address: </p>
                        </div>
                        <div className="experiences_card_child2 all_center">
                            <p>Malaypur, Jamui, Bihar, 811313 </p>
                        </div>
                        <div className="experiences_card_child1 all_center">
                            <p>Country: </p>
                        </div>
                        <div className="experiences_card_child2 all_center">
                            <p>India</p>
                        </div>
                    </div>

                    <div className="spacer_half"></div>
                    <a className='btn' href={resume}>Download CV</a>
                </div>
            </div>
            {/* ************ */}
            <div className="all_center ">
                <div className="">
                    <h2 className='_name'>Skills</h2>
                    <div className="skills_bar box_shadow">
                        <div className="bar">
                            <div className="info">
                                <span> <i className="fa-brands fa-html5 marg05px"></i> HTMl5</span>
                            </div>
                            <div className="progress_line html">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span> <i className="fa-brands fa-css3 marg05px"></i> CSS</span>
                            </div>
                            <div className="progress_line css">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span><i className="fa-brands fa-github marg05px"></i> github</span>
                            </div>
                            <div className="progress_line github">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span> <i className="fa-brands fa-js marg05px"></i> JavaScript</span>
                            </div>
                            <div className="progress_line javaScript">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span> <i className="fa-brands fa-react marg05px"></i> React js</span>
                            </div>
                            <div className="progress_line react">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span><i className="fa-brands fa-bootstrap marg05px"></i> bootstrap</span>
                            </div>
                            <div className="progress_line bootstrap">
                                <span></span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="all_center ">
                <div className=" services">
                    <h2 className='_name'>Services</h2>
                    <div className="cards">
                        <div className="about_card all_center coln_flex cur hover box_shadow ">
                            <i className="fa-solid fa-certificate marg05px"></i>
                            <h2>Web design</h2>
                            <p>1+ years </p>
                        </div>
                        <div className="about_card all_center coln_flex cur hover box_shadow ">
                            <i className="fa-brands fa-react marg05px"></i>
                            <h2>React Js</h2>
                            <p>1+ years </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About