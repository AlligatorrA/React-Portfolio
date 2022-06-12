import React from 'react'
import { projects } from '../../project_db/projectsDB'

const Projects = () => {
    return (
        <>
            <div className="home ">
                <div className="home_leftNright all_center coln_flex">
                    <h2 className='_name'>My Projects</h2>
                    The projects i made in the journey of my web development course with `Live Demo` and `github link`.
                    <div className="spacer_half"></div>
                    <div className="cards">
                        {
                            projects.map(project => (
                                <div className="project_card all_center coln_flex cur hover box_shadow " key={project.id}>
                                    <picture className='home_images_box'>
                                        <img className='home_images hover' src={project.url} alt="profile_pic" loading='lazy' />
                                    </picture>
                                    <div className="project_card_child all_center  coln_flex">
                                        <h3>{project.title}</h3>
                                        {project.desc}
                                    </div>
                                    <div className="all_center">
                                        <a href={project.github} ><button className='btn'>github</button></a>
                                        <a href={project.live}> <button className='btn'>live demo</button></a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects