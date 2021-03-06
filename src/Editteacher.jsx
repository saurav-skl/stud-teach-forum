import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams,Link } from "react-router-dom";

const Editteacher = () => {
    let history = useHistory();
    const { id } = useParams();
    const [teach, setUser] = useState({
        name: "",
        teacherid: "",
        classes: "",
        section: "",
    });

    const { name, teacherid, classes, section } = teach;
    const onInputChange = e => {
        setUser({ ...teach, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3004/teach/${id}`, teach);
        history.push("/student");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3004/teach/${id}`);
        setUser(result.data);
    };
    return (
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Enter Your teacherid. "
                    name="teacherid"
                    value={teacherid}
                    onChange={e => onInputChange(e)}
                    required
                />
            </div>
            {/* <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder=""
              name=""
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div> */}
            <div className="form-group">
                <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Class(Only From 1-12)"
                    name="classes"
                    value={classes}
                    onChange={e => onInputChange(e)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Section (Only from A - F)"
                    name="section"
                    value={section}
                    onChange={e => onInputChange(e)}
                    required
                />
            </div>
            <button className="btn btn-warning btn-block mt-1">Update User</button>
            <Link className="btn btn-danger float-right mt-2" to="/teacher">Cancel</Link>
        </form>
           </div>
         </div>
    );
};

export default Editteacher;