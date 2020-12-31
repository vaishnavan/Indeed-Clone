const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
        jobTitle:{
            type:String,
            required:true,
        },
        company:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        salary:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        companyDetail:{
            type:String,
            required:true
        }
})

module.exports = mongoose.model('Job', jobSchema);