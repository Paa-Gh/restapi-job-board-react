import React, { useState } from 'react';

const EditJobForm = props => {
  const [job, setJob] = useState(props.currentJob);

  const handleInputChange = event => {
    const { name, value } = event.target
    setJob({ ...job, [name]: value })
  };

  return (
      <form onSubmit={event => {
        event.preventDefault();
        if (!job.company || !job.position || !job.description) return;
        props.updateJob(job)
      }}>
        <label className="m-2">Company</label>
        <input type="text" name="company" value={job.company} onChange={handleInputChange} ></input>
        <label className="m-2">Position</label>
        <input type="text" name="position" value={job.position} onChange={handleInputChange} ></input>
        <label className="m-2">Description</label>
        <input type="text" name="description" value={job.description} onChange={handleInputChange} ></input>

        <button className="m-2">Update Job</button>
        <button className="m-2" onClick={() => props.setEditing(false)}>Cancel</button>
      </form>
  )
};

export default EditJobForm;
