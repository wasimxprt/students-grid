import React from 'react';
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

import studentActions from "../actions/studentActions";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function AddStudent(props) {

    const history = useHistory();
    const dispatch = useDispatch();

    const styles = {
        container: {
            width: "80%",
            margin: "0 auto",
        },
        input: {
            width: "100%",
        },
    };

    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        
        dispatch(studentActions.addStudents(data));
        history.push("/");
    }
    return (
        <section id="cover" className="min-vh-100">
            <div id="cover-caption">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                            <h1 className="display-4 py-2 text-truncate">Center my form.</h1>
                            <div className="px-2">
                                <form onSubmit={handleSubmit(onSubmit)} className="justify-content-center">
                                    <div className="form-group">
                                        <label className="sr-only">Name</label>
                                        <input ref={register({
                                            required: true,

                                        })} style={{ ...styles.input, borderColor: errors.name && "red" }} type="text" id="name" name="name" className="form-control" placeholder="Jane Doe" />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only">Email</label>
                                        <input ref={register({
                                            required: true,
                                            validate: (input) => isEmail(input),
                                        })} style={{ ...styles.input, borderColor: errors.email && "red" }} type="text" id="email" name="email" className="form-control" placeholder="jane.doe@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only">Phone</label>
                                        <input ref={register({
                                            required: true,
                                        })} style={{ ...styles.input, borderColor: errors.phone && "red" }} type="text" id="phone" name="phone" className="form-control" placeholder="Phone" />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only">School</label>
                                        <input ref={register({
                                            required: true,
                                        })} style={{ ...styles.input, borderColor: errors.school && "red" }} type="text" id="school" name="school" className="form-control" placeholder="School Name" />
                                    </div>

                                    <div className="form-group">
                                        <label className="sr-only">Standard</label>
                                        <input ref={register({
                                            required: true,

                                        })} style={{ ...styles.input, borderColor: errors.standard && "red" }} type="text" id="standard" name="standard" className="form-control" placeholder="Standard" />
                                    </div>

                                    <div className="form-group">
                                        <label className="sr-only">Division</label>
                                        <input ref={register({
                                            required: true,
                                        })} style={{ ...styles.input, borderColor: errors.division && "red" }} type="text" id="division" name="division" className="form-control" placeholder="Division" />
                                    </div>

                                    <div className="form-group">
                                        <label className="sr-only">State</label>
                                        <input ref={register({
                                            required: true,

                                        })} style={{ ...styles.input, borderColor: errors.state && "red" }} type="text" id="state" name="state" className="form-control" placeholder="State" />
                                    </div>

                                    <div className="form-group">
                                        <label className="sr-only">Country</label>
                                        <input ref={register({
                                            required: true,

                                        })} style={{ ...styles.input, borderColor: errors.country && "red" }} type="text" id="country" name="country" className="form-control" placeholder="Country" />
                                    </div>

                                    <button type="submit" className="btn btn-primary" disabled={formState.isSubmitting}>Submit</button>
                                    <Link to="/">
                                        <button type="button" className="btn btn-secondary" >Back</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddStudent;