import React from 'react'
import './home.css'
import videoLibrary from '../../assets/video-library.png'
import Ecom from '../../assets/E-com.png'
import weather from '../../assets/weather.png'
import avatar from '../../assets/avtar.png'
import Contact from '../contact/Contact'
import { NavLink } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div className="home ">
                <div className="home_left  just_center coln_flex">
                    Hy! I am
                    <h1 className='_name'>Anand Raj</h1>
                    <p>I am a Web Developer. I design websites using React turning `a beautiful single page application`, I am here to give your thought a beautiful 2D shape!</p>
                    <div className="spacer_01"></div>
                    <div className="all_center">
                        <button className='btn'>Download CV</button>
                        <NavLink to='/Contact' className='btn'>lets Talk</NavLink>
                    </div>
                </div>
                <div className="home_right all_center ">
                    <picture className='avatar cur'>
                        <img className='avatar hover ' src={avatar} alt="profile_pic" loading='lazy' />
                    </picture>
                </div>
            </div>
            {/* ******************** */}
            <div className="home ">
                <div className="home_leftNright">
                    <h2 className='_name'>About Me</h2>
                </div>
                <div className="home_left ">
                    <picture className='home_images_box cur'>
                        <img className='avatar hover rotate box_shadow' src={avatar} alt="profile_pic" loading='lazy' />
                    </picture>
                </div>
                <div className="home_right all_center coln_flex">
                    <div className="cards">
                        <div className="about_card all_center coln_flex cur hover box_shadow ">
                            <i className="fa-solid fa-certificate marg05px"></i>
                            <h2>Experience</h2>
                            <p>1+ years </p>
                        </div>
                        <div className="about_card all_center coln_flex cur hover box_shadow ">
                            <i className="fa-solid fa-certificate marg05px"></i>
                            <h2>Experience</h2>
                            <p>1+ years </p>
                        </div>
                        <NavLink to='/Projects'>
                            <div className="about_card all_center coln_flex cur hover box_shadow ">
                                <i className="fa-solid fa-folder marg05px"></i>
                                <h2>Projects</h2>
                                <p>20+ Projects </p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="spacer_01"></div>
                    <div className="about_desc">
                        I have been learning JavaScript and React since past 1year and made 20+ projects, also here to learn and get experience on the basis of proof of work.
                    </div>
                    <div className="spacer_half"></div>
                    <NavLink to='/About'> <button className='btn'>learn more</button></NavLink>
                </div>
            </div>
            {/* -**************** */}
            <div className="home ">
                <div className="home_leftNright all_center coln_flex">
                    <h2 className='_name'>My Experiences</h2>
                    I am preety clear with HTML5, CSS3, Bootstrap, ReactJS, JavaScript, GitHub and Web Hosting.
                    <div className="spacer_half"></div>
                    <div className="experiences_card all_center coln_flex cur hover box_shadow ">
                        <h2>Frontend Developer</h2>
                        <div className="experiences_card_parent all_center">
                            <div className="spacer_half"></div>
                            <div className="experiences_card_child1 all_center">
                                <i className="fa-brands fa-html5 marg05px"></i>
                                <p>HTMl5 </p>
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
                    <div className="spacer_half"></div>
                </div>

            </div>
            {/* ************************** */}
            <div className="home ">
                <div className="home_leftNright all_center coln_flex">
                    <h2 className='_name'>My Projects</h2>
                    The projects i made in the journey of my web development course with `Live Demo` and `github link`.
                    <div className="spacer_half"></div>
                    <div className="cards">
                        <div className="project_card all_center coln_flex cur hover box_shadow ">
                            <picture className='home_images_box'>
                                <img className='home_images hover' src={videoLibrary} alt="profile_pic" loading='lazy' />
                            </picture>
                            <div className="project_card_child all_center  coln_flex">
                                <h3>Video Library</h3>
                                Lorem ipsum dolor sit amet consectedi quam?
                                Lorem ipsum dolor
                            </div>
                            <div className="all_center">
                                <button className='btn'>github</button>
                                <button className='btn'>live demo</button>
                            </div>
                        </div>
                        <div className="project_card all_center coln_flex cur hover box_shadow ">
                            <picture className='home_images_box'>
                                <img className='home_images hover' src={Ecom} alt="profile_pic" loading='lazy' />
                            </picture>
                            <div className="project_card_child all_center  coln_flex">
                                <h3>Video Library</h3>
                                Lorem ipsum dolor sit amet consectedi quam?
                                Lorem ipsum dolor lorem lorem
                            </div>
                            <div className="all_center">
                                <button className='btn'>github</button>
                                <button className='btn'>live demo</button>
                            </div>
                        </div>
                        <div className="project_card all_center coln_flex cur hover box_shadow ">
                            <picture className='home_images_box'>
                                <img className='home_images hover' src={weather} alt="profile_pic" loading='lazy' />
                            </picture>
                            <div className="project_card_child all_center  coln_flex">
                                <h3>Video Library</h3>
                                Lorem ipsum dolor sit amet consectedi quam?
                                Lorem ipsum dolor
                            </div>
                            <div className="all_center">
                                <button className='btn'>github</button>
                                <button className='btn'>live demo</button>
                            </div>
                        </div>
                    </div>
                    <NavLink to='/Projects'>
                        <button className='btn'>see more...</button>
                    </NavLink>
                    <div className="spacer_half"></div>
                </div>
            </div>
            {/* ******************************** */}

            <Contact />
            <div className="spacer_half"></div>

        </>
    )
}

export default Home