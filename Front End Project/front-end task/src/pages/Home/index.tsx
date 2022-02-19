import React from 'react';
import { Navbar } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import initialpage from './img/initpage.png';
import taskslist from './img/taskslist.png';
import newtask from './img/taskspage.png';
import newtask2 from './img/newtask2.png'
import visualize from './img/visupage.png'
import edit from './img/editpage.png';
import editvisu from './img/editvisu.png';
import finish from './img/finishbutton.png';
import finishvisu from './img/finishvisu.png';
import remove from './img/removecap.png';
import tasker from './img/tasker.png';
import taskername from './img/taskername.png';
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs"
import './index.css';
 
const Home: React.FC = () => {
    return( <div className="body">

        <div className="container comp">
            
            <div className="p-text">

                <h1>Stop writing your tasks and work on your notebooks. Take a hop into the future with "Tasker"!</h1>

                <p>The most easiest and efficient way to organize your work!
                Bring everythin together to one place easily!
                </p>
                <p>With tasker you can set work from your daily to do tasks,
                    manage them, if they need an alteration, mark them as finished,
                     and delete them when needed, with the simple click of your fingers!</p>

            </div>

            <div className="video-section">

                <h1>See how easy it is:</h1>

                <ReactPlayer id="player" url='https://youtu.be/6APRlodQDeE' />

            </div>

        </div>

        <div className="container initial-list">
            <h1>This is how your list will start:</h1>

            <img src={initialpage} />
            
            <div className="init-description">
                <p>To add a new or another task, you'll need
                to click on the "New Task" button on the right upwards
                corner of the Tasks Page list.</p>
            </div>
        </div>

        <div className="container appearance">
            <h1>Take a look of how the list looks like when filled up:</h1>

            <img src={taskslist} />

            <div className="apprc-description">
                <p>Whenever we add a task, we're able to see the ID of the task,
                    the title, when it was last updated, the status and the 
                    actions that we can do with them.
                </p>
            </div>    
        </div>

        <div className="container new-task-sec">
            <h1>What the "New Task" looks like:</h1>

            <img src={newtask} />

            <div className="newtsk-description">
                <p>On the "New Tasks" page, you can add a new task by putting an title
                    and a description, if you want. You can click on the "Save" button
                    in order to save your task, or you can click on "Go Back" if you don't
                    want to save it or leave it.
                </p>
            </div>    

            <img src={newtask2} />
        </div>

        

        <div className="container visualize">
            <h1>You can check the task details on the "Visualize" button like this:</h1>

            <img src={visualize} />

            <div className="visu-description">
                <p>Here you can encounter every detail you have put in your task,
                    such as the "Title", the "Sign up Date" and "Update Date" and its status.
                    And, of course, you can return to the list page by clicking the "Go Back" button.
                </p>
            </div>
        </div>

        <div className="container edit-button">
            <h1>With the edit button, we can edit our tasks like this:</h1>

            <img src={edit} />

            <div className="edit-description">
                <p>When you click on the button "Edit", you'll be directed to a similar page
                    like the "New Task" page, where you can change the title and description
                    of your task.
                </p>
            </div>

            <img src={editvisu} />

            <div className="edit-description">
                <p>When you click on the "Save" button on the edit page, this task will now
                    go to the bottom of the list, since it was the last task updated.
                    And of course, when you go to the "Visualize" page, everything you changed
                    will be shown as different according to your changes.
                </p>
            </div>
        </div>

        <div className="container finish">
            <h1>What happens when you click the "Finish" button?</h1>

            <img src={finish} />

            <div className="finish-description">
                <p>Once you click the "Finish" button, your task'll go to the bottom of the list and'll be marked as "Finished!" on
                    its status, and you won't be able to edit or finish it once again.
                </p>
            </div>

            <img src={finishvisu} />

            <div className="finish-description">
                <p>The "Update Date" and the "Status" on the "Visualize" page will also be
                    changed when the task gets finished.
                </p>
            </div>
        </div>

        <div className="container remove">
            <h1>Take a look on what happens when you click the "Remove" button:</h1>

            <img src={remove} />

            <div className="remove-description">
                <p>When you click the "Remove" button, it'll simply just delete the task you aimed for,
                     which in this case, the "Study JavaScript" task.
                    With that said, be aware not to delete a task that is not yet finished!
                </p>
            </div>
        </div>

        <footer>
            <Navbar className="header" id="header" bg="dark" variant="dark" expand="lg">
                <div className="footer-flex">
                    <div className="tasker-brand">
                        <img className="logo-footer" src={tasker} />
                        <img className="logo-name-footer" src={taskername} />
                    </div>

                    <div className="social-media">
                        <a href="https://github.com/kcirefrz" target="_blank"><FiGithub size={40} color="white" href="https://github.com" /></a>
                        <a href="https://www.linkedin.com/in/erick-fares-3941a0207/"><AiFillLinkedin size={50} color="white" /></a>
                        <a href="https://www.instagram.com/erickfrzz/" target="_blank" ><BsInstagram size={40} color="white" /></a>
                    </div>
                </div> 
            </Navbar>
        </footer>

    </div>
        )
}
 
export default Home;