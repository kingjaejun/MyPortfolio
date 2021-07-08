import {v4 as uuidv4} from 'uuid';
import ProjectImg from '../images/projectImg.png';
import todolist from '../images/todolist.png';
import emoge from '../images/emoge.png';
import emoge_a from '../images/emoge_a.png';
import emoge_b from '../images/emoge_b.png';
const projects = [
    {
        id:uuidv4(),
        name: 'ToDo List',
        desc:
        'An application to check your works',
        img:emoge,
    },
    {
        id:uuidv4(),
        name: 'Weather App',
        desc:
        'Using this app you can take an umbrella today',
        img:emoge_a,
    },
    {
        id:uuidv4(),
        name: 'Weather App',
        desc:
        'Using this app you can take an umbrella today',
        img:emoge_b,
    },
    {
        id:uuidv4(),
        name: 'Weather App',
        desc:
        'Using this app you can take an umbrella today',
        img:ProjectImg,
    },
    {
        id:uuidv4(),
        name: 'Weather App',
        desc:
        'Using this app you can take an umbrella today',
        img:ProjectImg,
    }
]
export default projects;