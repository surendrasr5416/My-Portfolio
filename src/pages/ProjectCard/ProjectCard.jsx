import './ProjectCard.css'
import { Link } from 'react-router-dom'


const ProjectCard = ({ projects }) => {
  return (<>
  <div>
    <div>
        <div>
            <div>
                <h5 className="card-title">{projects.title}</h5>

              <p className="card-text">{projects.description}</p>
              <Link to={`/Projects/${projects.id}`} >
              
                <p className="card-text">
                  <small className="text-body-primary">Click here for more details</small>
                  </p>
              </Link>
              
            </div>
          </div>
        </div>
      </div>

   
  </>

              



 

  )
}
export default ProjectCard