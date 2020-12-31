const express = require('express');
const Job = require('../model/jobModel');
const router = express.Router();

router.post('/postjob', async (req, res) => {
    const job = new Job({
        jobTitle: req.body.jobTitle,
        company: req.body.company,
        location: req.body.location,
        salary: req.body.salary,
        description: req.body.description,
        companyDetail: req.body.companyDetail
    })
    await job.save()
    .then((data)=>{
        res.json(data);
    })
})

router.get('/allpost', async (req, res) => {
    await Job.find()
    .then((data)=>{
        res.json(data);
    });
});

module.exports = router;