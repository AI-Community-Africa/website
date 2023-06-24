import React from 'react';

function Teams() {
  return (
    <div className="container">
      <h1 className="text-center">Teams</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2>Team Member 1</h2>
              <p>Role: Frontend Developer</p>
              <p>Experience: 3 years</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2>Team Member 2</h2>
              <p>Role: Backend Developer</p>
              <p>Experience: 5 years</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2>Team Member 3</h2>
              <p>Role: UI/UX Designer</p>
              <p>Experience: 2 years</p>
            </div>
          </div>
        </div>
        {/* Add more team member cards within additional columns as needed */}
      </div>
      <footer>
        <p>&copy; 2023 AI Community Africa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Teams;
