import React, { Component } from 'react'
import Axios from 'axios';
import './displayList.css';
import IndeedDisplay from './IndeedDisplay';

class IndeedDisplayList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobData: [],
            showJob: [],
            show: false,
            search: '',
            jobActive: '',
            read: false,
            display: false,
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/api/job/allpost')
            .then((res) => {
                this.setState({
                    jobData: res.data,
                });
            });
    }

    handleShow = (id) => {
        const { jobData } = this.state;
        const data = jobData.find((job) => job._id === id);
        this.setState({
            showJob: data,
            show: true,
            jobActive: id,
            display: true,
        });
    }

    handleSearch = (e) => {
        this.setState({
            search: e.target.value,
        });
    }

    handleRead = (i) => {
        const { read } = this.state;
        this.setState({
            read: { ...read, [i]: !read[i] },
        });
    }

    render() {
        const { jobData, showJob, show, search, jobActive, read, display } = this.state;
        const jobFilter = jobData.reverse().filter((searchData) => {
            return searchData.jobTitle.toLowerCase().includes(search.toLowerCase());
        })
        return (
            <div>
                <div className="container ">
                    <div className="job_search">
                        <input type="text" placeholder="SearchBy Job..." onChange={(e) => this.handleSearch(e)} />
                    </div>
                    <p>Total job posted : {jobData.length}</p>
                    {show ?
                        <div className="main_job">
                            <div className="job_list">
                                {jobFilter.map((job, i) => {
                                    return (
                                        <div onClick={() => this.handleShow(job._id)} key={job._id} className={jobActive === job._id ? 'job_active' : 'job_card'}>
                                            <h5>{job.jobTitle}</h5>
                                            <p>{job.company}</p>
                                            <p>{job.location}</p>
                                            <h5>{job.salary}</h5>
                                            <p>Apply securely with Indeed Resume</p>
                                            {read[i] ?
                                                <p className="job_read">{job.companyDetail}. <span onClick={() => this.handleRead(i)} >ReadLess</span></p>
                                                :
                                                <p className="job_read">{job.companyDetail.slice(0, 70)}...<span onClick={() => this.handleRead(i)} >ReadMore</span></p>
                                            }

                                        </div>
                                    )
                                })}
                            </div>
                            <div>
                                <IndeedDisplay showData={showJob} show={display} />
                            </div>
                        </div>
                        :
                        <div className="main_job">
                            <div className="job_list">
                                {jobData.map((job, i) => {
                                    return (
                                        <div onClick={() => this.handleShow(job._id)} key={job._id} className="job_card">
                                            <h5>{job.jobTitle}</h5>
                                            <p>{job.company}</p>
                                            <p>{job.location}</p>
                                            <h5>{job.salary}</h5>
                                            <p>Apply securely with Indeed Resume</p>
                                            {read[i] ?
                                                <p className="job_read">{job.companyDetail}. <span onClick={() => this.handleRead(i)}>ReadLess</span></p>
                                                :
                                                <p className="job_read">{job.companyDetail.slice(0, 70)}...<span onClick={() => this.handleRead(i)}>ReadMore</span></p>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <div>
                                <IndeedDisplay showData={showJob} show={display} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default IndeedDisplayList;
