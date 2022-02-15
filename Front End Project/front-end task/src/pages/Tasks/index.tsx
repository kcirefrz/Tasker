import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import moment from 'moment';
import './index.css';
 
interface ITask{
    id: number;
    title: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}
 
const Tasks: React.FC = () => {
 
    const [tasks, setTasks] = useState<ITask[]>([])
    const navigate = useNavigate()
 
    useEffect(() => {
        loadTasks()
    }, [])
 
    async function loadTasks() {
        const response = await api.get('/tasks')
        console.log(response);
        setTasks(response.data)
    }
 
    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

    function newTask(){
        navigate('/nova_tarefa')
    }

    function editTask(id: number){
        navigate(`/nova_tarefa/${id}`)
    }

    function viewTask(id:number){
        navigate(`/tarefas/${id}`)
    }

    async function finishedTask(id: number){
        await api.patch(`/tasks/${id}`)
        loadTasks()
    }

    async function deleteTask(id: number){
        await api.delete(`/tasks/${id}`)
        loadTasks()
    }



 
    return (

        
        
        <div className="container task-table">
            <div className="task-header">
                <h1>Tasks Page</h1>
                <Button variant="dark" size="sm" onClick={newTask}>New Task</Button>
            </div>
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Update Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{formatDate(task.updated_at)}</td>
                                <td>{task.finished ? "Finished!" : "Pending..."}</td>
                                <td>
                                    <Button size="sm" disabled={task.finished} variant="outline-primary" onClick={() => editTask(task.id)}>Edit</Button>{' '}
                                    <Button size="sm" disabled={task.finished} variant="outline-success" onClick={() => finishedTask(task.id)}>Finish</Button>{' '}
                                    <Button size="sm" variant="outline-warning" onClick={() => viewTask(task.id)}>Visualize</Button>{' '}
                                    <Button size="sm" variant="outline-danger" onClick={() => deleteTask(task.id)}>Remove</Button>{' '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
 
export default Tasks;