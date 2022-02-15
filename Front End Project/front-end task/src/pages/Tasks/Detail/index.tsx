import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import './index.css';
import api from '../../../services/api';
import moment from 'moment';
 
interface ITask{
    id: number;
    title: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}
 
const Detail: React.FC = () => {
 
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [task, setTask] = useState<ITask>()
 
    function back(){
        navigate('/tarefas')
    }
 
    async function findTask(){
        const response = await api.get(`/tasks/${id}`)
        console.log(response)
        setTask(response.data)
    }
 
    useEffect(() => {
        findTask()
    }, [id])
 
    return (
        <div className="container task-detail">
            <br />
            <div className="task-header">
                <h1>Task Details</h1>
                <Button variant="dark" size="sm" onClick={back}>Go back</Button>
            </div>
            <br />
 
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{task?.title}</Card.Title>
                    
                    <Card.Text>
                    {task?.description}
                    <br/>
                    {task?.finished ? "Finished!" : "Pending..."}
                    <br />
                    <strong>Sign up Date: </strong>
                    {moment(task?.created_at).format('DD/MM/YYYY')}
                    <br />
                    <strong>Update Date: </strong>
                    {moment(task?.updated_at).format('DD/MM/YYYY')}
                    </Card.Text>
                </Card.Body>
            </Card>
 
        </div>
    );
}
 
export default Detail;
