import React from 'react';

function Projects() {
  return (
    <div className="container">
      <h1 className="text-center">Projects</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2>Project 1</h2>
              <p>Description of Project 1</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2>Project 2</h2>
              <p>Description of Project 2</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2>Project 3</h2>
              <p>Description of Project 3</p>
            </div>
          </div>
        </div>
        {/* Add more project cards within additional columns as needed */}
      </div>
      <footer>
        <p>&copy; 2023 AI Community Africa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Projects;
