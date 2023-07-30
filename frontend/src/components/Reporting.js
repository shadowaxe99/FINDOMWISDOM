import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reportUser } from '../redux/actions';

const Reporting = () => {
  const dispatch = useDispatch();
  const [report, setReport] = useState({
    userId: '',
    reason: '',
    description: '',
  });

  const handleChange = (e) => {
    setReport({
      ...report,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reportUser(report));
  };

  return (
    <div id="reportForm">
      <h2>Report User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            name="userId"
            value={report.userId}
            onChange={handleChange}
          />
        </label>
        <label>
          Reason:
          <input
            type="text"
            name="reason"
            value={report.reason}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={report.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default Reporting;