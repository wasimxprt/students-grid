const initialState = {
    students: [
        // { id: 0, name: "Student 1", email: "abc@gmail.com", phone: "212", school: "school1", standard: "1st", division: "A", state: "MH", country: "India" }
    ]
}

const studentReducer = (state = initialState, action) => {

    let students = state.students;

    switch (action.type) {
        case "SET_STUDENTS":
            return {
                ...state,
                students: action.payload
            }
        case "ADD_STUDENTS":

            let obj = {id: Math.random().toString(16).slice(-4)};
            let student = {...action.payload, ...obj};
            
            //Object.assign(student, {id: id});
            students.push(student);

            return {
                ...state,
                students: students
            }

        case "GET_STUDENTS":
            return {
                ...state
            }
        default:
            return state;
    }
}

export default studentReducer;