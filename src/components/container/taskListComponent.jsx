import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/taskComponent';

function TaskListComponent(props) {

    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL);

    const changeState = () => {
        console.log('TODO: Cambiar el estado de una tarea') 
    } 

    return (
        <div>
            <div>
                <h1>Your task:</h1>
            </div>
            {/* TODO: Añadir un FOR/MAP para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}

export default TaskListComponent

