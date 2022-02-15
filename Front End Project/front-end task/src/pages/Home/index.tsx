import React from 'react';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import './index.css';
 
const Home: React.FC = () => {
    return( <div className="body">

        <div className="container comp">
            
            <div className="p-text">

                <h1>Stop writing your tasks and work on your notebooks. Take a hop into the future with "Tasker"!</h1>

                <p>The most easiest and efficient way to organize your work!</p>

            </div>

            <div className="2">

                <h1>See how easy it is:</h1>

                <ReactPlayer url='https://www.youtube.com/watch?v=2mGwMtAeJ-U' />

            </div>

        </div>

    </div>
        )
}
 
export default Home;