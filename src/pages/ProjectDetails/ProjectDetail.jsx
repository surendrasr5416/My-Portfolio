import { useParams } from "react-router-dom";
import { projects_list } from "../../data/projects";
import './ProjectDetail.css';

function ProjectDetails() {
    const { id } = useParams();

    const project = projects_list.find((project) => project.id == id)


    if (!project) {
        return <h2>Project is not here</h2>
    }


    return (
        <>
            <div className="container row">
                <div className="col-6">
                    <img src={project.thumbnail} alt="" className="w-50" />
                </div>
                <div className="col-6">
                    <div className="row">
                        {project.title}
                    </div>
                    <div>
                        {project.description}
                    </div>
                    
                </div>
            </div>


            <div>
                <h3 className="text-center">
                    Skills Required
                </h3>
                <div className="skill-container row w-100 d-flex justify-content">
                    <div className="card col-6 text-center" >
                        <img src="/images/htmllogo.jpg" alt="" className="d-flex justify-content" width={"90px"}/>
                        HTML
                    </div>
                    <div className="card col-6 text-center" >
                        <img src="/images/csslogo.jpg" alt="" width={"90px"} />
                        CSS
                    </div>
                    <div className="card col-6 text-center" >
                        <img src="/images/JSlogo.jpg" alt="" width={"80px"}/>
                        JS
                    </div>
                    <div className="card col-6 text-center" >
                        <img src="/images/reactlogo.jpg" alt="" width={"90px"}/>
                        React JS
                    </div>
                </div>

            </div>


        </>
    )

}

export default ProjectDetails;