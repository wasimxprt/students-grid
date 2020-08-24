import React, { useState, useEffect } from 'react';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { useSelector, useDispatch } from 'react-redux';
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from 'react-router-dom';


function StudentList(props) {

    const columns = [
        {
            dataField: "id",
            text: "ID",
            sort: true
        },
        {
            dataField: "name",
            text: "Name",
            sort: true
        },
        {
            dataField: "email",
            text: "Email"
        },
        {
            dataField: "phone",
            text: "Phone"
        },
        {
            dataField: "school",
            text: "School"
        },
        {
            dataField: "standard",
            text: "Standard"
        },
        {
            dataField: "division",
            text: "Division"
        },
        {
            dataField: "state",
            text: "State"
        },
        {
            dataField: "country",
            text: "Country"
        }
    ];

    const [students, setStudents] = useState([]);

    const studentsData = useSelector(state => state.studentReducer.students);
    const dispatch = useDispatch();

    useEffect(() => {
        setStudents(studentsData);
    }, []);

    console.log(studentsData.length)

    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <Link to="/add">
                    <button type="button" className="btn btn-secondary" >Add</button>
                </Link>
                {studentsData.length > 0 ? <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={studentsData}
                    columns={columns}
                /> : <div><h1>No data found</h1></div>}
                
            </div>
        </div>
    );
}

export default StudentList;