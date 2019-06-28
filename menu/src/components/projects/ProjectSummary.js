import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">Cliente: {project.client}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p>Pedido nº {project.id}</p>
        <p>Total: {project.price}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary;
