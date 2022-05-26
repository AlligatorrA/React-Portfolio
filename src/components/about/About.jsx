import React from 'react'
import './about.css'
import avatar from '../../assets/avtar.png'
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
                    <button className='btn'>Download CV</button>
                </div>
            </div>
            {/* ************ */}
            <div className="home ">
                <div className="home_left">
                    <h2 className='_name'>Skills</h2>
                    <div className="experiences_card_parent all_center">
                        <div className="spacer_half"></div>
                        <div className="experiences_card_child1 all_center">
                            <i className="fa-brands fa-html5 marg05px"></i>
                            <p>HTMl5 </p>
                            <label htmlFor=""> 60%
                                <input type="range" value='60 %' /></label>
                        </div>
                        <div className="experiences_card_child2 all_center">
                            <i className="fa-brands fa-css3 marg05px"></i>
                            <p>CSS </p>
                        </div>
                        <div className="experiences_card_child1 all_center">
                            <i className="fa-brands fa-js marg05px"></i>
                            <p>JavaScript </p>
                        </div>
                        <div className="experiences_card_child2 all_center">
                            <i className="fa-brands fa-react marg05px"></i>
                            <p>React js </p>
                        </div>
                        <div className="experiences_card_child1 all_center">
                            <i className="fa-brands fa-bootstrap marg05px"></i>
                            <p>bootstrap </p>
                        </div>
                        <div className="experiences_card_child2 all_center">
                            <i className="fa-brands fa-github marg05px"></i>
                            <p>github </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home ">
                <div className="home_left">
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