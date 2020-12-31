import React, { Component } from 'react';
import htmlparser from 'react-html-parser';
import SkeletonCard from './SkeletonCard';

class IndeedDisplay extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
        };
    }


    render() {
        const { showData, show } = this.props;
        const { loading } = this.state;
        return (
            <>
                {show ?
                    <>
                        <div className="job_show">
                            <div className="job_showCard">
                                <h5>{showData.jobTitle}</h5>
                                <span>{showData.company} - {showData.location}</span>
                                <p>{showData.salary}</p>
                                <button className="btn btn-primary">Apply Now</button>
                            </div>
                            <div className="job_content">
                                <p>{htmlparser(showData.description)}</p>
                            </div>
                        </div>
                    </>
                    :
                    <div className="job_show">
                        <div className="job_showCard">
                            <h5 className="job_email">Get new jobs for this search by email</h5>
                        </div>
                        <div className="job_input">
                            <label>Email Address</label>
                            <input type="text" />
                            <button>Active</button>
                            <p>
                                By creating a job alert, you agree to our Terms. You can change your consent settings at any time by unsubscribing or as detailed in our terms.
                            </p>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default IndeedDisplay
