import * as actions from "../constants/actionTypes";

const setStudents = (students) => {
    return {
        type: actions.SET_STUDENTS,
        payload: students
    }
}

const addStudents = (student) => {
    return {
        type: actions.ADD_STUDENTS,
        payload: student
    }
}

const getStudents = () => {
    return {
        type: actions.GET_STUDENTS
    }
}

export default {
    setStudents,
    getStudents,
    addStudents
}