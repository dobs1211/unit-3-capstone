import fetch from 'isomorphic-fetch';

//action types
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const ADD_TASKS = 'ADD_TASKS';
export const COMPLETE_TASKS = 'COMPLETE_TASKS';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function getAuth() {
    let authentication = JSON.parse(localStorage.getItem('authentication')) || { apiToken: '', uuId: '' };

return {
    type: LOGIN,
    payload: {
        authentication
    }
};
  }
  

const tasks = [
    {
        id: 1,
        type: 'daily',
        text: 'Check facebook',
        completed: false
    },
    {
        id: 2,
        type: 'habit',
        text: 'Walk for 30 minutes',
    },
    {
        id: 3,
        type: 'todo',
        text: 'Finish capstone project',
        completed: false
   },
   {
       id:4,
        type: 'todo',
        text: 'Finish Redux slides',
        completed: true
   }
    ];
    
    export function getTasks() {
        console.log('fired');
        return {
            type: GET_TASKS,
            payload: {
                tasks
            }
        };
    }
    
    export function addTask(text, type) {
        return {
            type: ADD_TASKS,
            payload: {
                text,
                type
            }
        };
    }
    
    export function completeTask(id) {
        return {
            type: COMPLETE_TASKS,
            payload: {
                id
            }
        };
    }