const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const appSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	views: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'View',
		},
	],
});

module.exports = mongoose.model('App', appSchema);
