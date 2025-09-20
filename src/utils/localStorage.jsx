
const employees = [
    {
        "id": 1,
        "firstName": "Arif",
        "email": "arif@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": []
    },
    {
        "id": 2,
        "firstName": "Arfat",
        "email": "arfat@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": []
    },
    {
        "id": 3,
        "firstName": "Farhan",
        "email": "farhan@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": []
    },
    {
        "id": 4,
        "firstName": "Shuvo",
        "email": "shuvo@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": []
    },
    {
        "id": 5,
        "firstName": "Muntakim",
        "email": "muntakim@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": []
    }
];


const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}
