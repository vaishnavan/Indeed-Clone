import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Axios from 'axios';

class IndeedForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
             jobTitle:'',
             company:'',
             location:'',
             salary:'',
             description:'',
             companyDetail:'',
        };
    }

    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]:value,
        });
    }

    handleEditorChange = (e) =>{
        this.setState({
            description: e.target.getContent(),
        });
    }

    handleClick = (e) =>{
        // e.preventDefault();
        const jobData = {
            jobTitle:this.state.jobTitle,
            company:this.state.company,
            salary:this.state.salary,
            description:this.state.description,
            location:this.state.location,
            companyDetail:this.state.companyDetail,
        }
        Axios.post('http://localhost:5000/api/job/postjob',jobData)
        .then((res)=> {
            console.log(res);
        });
        
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Job Title</label>
                            <input type="text" className="form-control" name="jobTitle" onChange={(e)=> this.handleChange(e)} placeholder="Title" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Company Name</label>
                            <input type="text" className="form-control" name="company" onChange={(e)=> this.handleChange(e)}  placeholder="Company" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Salary Range</label>
                            <input type="text" className="form-control" name="salary" onChange={(e)=> this.handleChange(e)} placeholder="Salary" />
                        </div>
                        <Editor
                            init={{
                                height: 500,
                                menubar: false,
                                selector: 'textarea',  // change this value according to your HTML
                                plugins: 'media',
                                menubar: 'insert',
                                toolbar: 'media',
                                media_dimensions: false,
                                plugins: [
                                    'advlist autolink lists link image',
                                    'charmap print preview anchor help',
                                    'searchreplace visualblocks code',
                                    'insertdatetime media table paste wordcount'
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic | \
                                     alignleft aligncenter alignright | \
                                     bullist numlist outdent indent | help'
                            }}
                            onChange={(e)=> this.handleEditorChange(e)}
                        />
                        <div className="mb-3">
                            <label className="form-label">Location</label>
                            <input type="text" className="form-control" name="location" onChange={(e)=> this.handleChange(e)} placeholder="Location" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Comapny Detail</label>
                            <input type="text" className="form-control" name="companyDetail" onChange={(e)=> this.handleChange(e)} placeholder="MoreInfo" />
                        </div>
                        <button style={{ background: 'rgb(41, 217, 240)', padding: "10px", color: "white", border: "none", margin: "10px 0", borderRadius: "4px" }} onClick={this.handleClick} >Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default IndeedForm;
