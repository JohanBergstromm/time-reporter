import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	month: String,
	monthTimes: Array
});

export default mongoose.model('storage', schema);

// module.exports.getTimes = function(cb, limit) {
//     Time.find(cb).limit(limit);
// }