const mongoose = require('mongoose');
const schema = mongoose.Schema;

const model = new schema({
	username:{
		type:'string',
		required:true
	},
	password:{
		type:'string',
		requried:true
	},
	score:{
		type:'number',
		default:0
	},
	submissionc:{
		type:'object',
		default:{},
	},
	submissions:{
		type:'array',
		default:[]
	},
	csubmissions:{
		type:'array'
	},
	easyi:{
		type:'number',
		default:1
	},
	medi:{
		type:'number',
		default:1
	},
	hardi:{
		type:'number',
		default:1
	},
	cdiff:{
		type:'number',
		default:0
	},
	cqnum:{
		type:'number',
		default:0
	}
},{minimize:false}
);

module.exports = mongoose.model('user',model);