import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { assignTask } from '../redux/actions';

const TaskManagement = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(assignTask(task));
    setTask('');
  };

  return (
    <div id="taskForm">
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input type="text" value={task} onChange={e => setTask(e.target.value)} />
        </label>
        <input type="submit" value="Assign Task" />
      </form>
    </div>
  );
};

export default TaskManagement;