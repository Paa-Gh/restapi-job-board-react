import React from 'react';

const Job = ({ job, removeJob, editJob, editing }) => (
  <div className="row justify-content-center">
  <div className="col-lg-4">
    <div className="job mb-2" key={job.id}>
      <h4>{job.company}</h4>
      <p>{job.position}</p>
      <p>{job.description}</p>

      {editing ? (null
      ) : (
          <button className="btn btn-light mx-2"
              onClick={() => {editJob(job)}}
          >Edit</button>
      )}

      <button className="btn btn-danger mx-2" onClick={() => removeJob(job.id)}>Remove</button>
    </div>
  </div>
  </div>
);

export default Job;
