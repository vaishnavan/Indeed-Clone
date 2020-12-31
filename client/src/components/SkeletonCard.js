import React, { Component } from 'react'
import Skeleton from "react-loading-skeleton";

class SkeletonCard extends Component {
    render() {
        return (
            <div>
                <div className="job_show">
                    <div className="job_showCard">
                        <Skeleton duration={1} height={20} width={300} />&nbsp;<br />
                        <Skeleton height={10} width={200} />&nbsp;<br />
                        <Skeleton height={10} width={250} />&nbsp;<br />
                        <div className="apply_button">
                            <Skeleton height={40} width={100} />
                        </div>
                    </div>
                    <div className="job_content">
                        <Skeleton height={10} width={200} />&nbsp;<br />
                        <Skeleton height={10} width={500} />&nbsp;<br />
                        <Skeleton height={10} width={480} />&nbsp;<br />
                        <Skeleton height={10} width={490} />&nbsp;<br />
                        <Skeleton height={10} width={400} />&nbsp;<br />
                        <Skeleton height={10} width={150} />&nbsp;<br />
                        <Skeleton height={10} width={200} />&nbsp;<br />
                        <Skeleton height={10} width={500} />&nbsp;<br />
                        <Skeleton height={10} width={480} />&nbsp;<br />
                        <Skeleton height={10} width={490} />&nbsp;<br />
                        <Skeleton height={10} width={400} />&nbsp;<br />
                        <Skeleton height={10} width={150} />&nbsp;<br />
                        <Skeleton height={10} width={200} />&nbsp;<br />
                        <Skeleton height={10} width={500} />&nbsp;<br />
                        <Skeleton height={10} width={480} />&nbsp;<br />
                        <Skeleton height={10} width={490} />&nbsp;<br />
                        <Skeleton height={10} width={400} />&nbsp;<br />
                        <Skeleton height={10} width={150} />&nbsp;<br />
                    </div>
                </div>
            </div>
        )
    }
}

export default SkeletonCard
