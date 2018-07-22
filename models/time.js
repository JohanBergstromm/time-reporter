import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    from: {
        hour: String,
        minute: String
    },
    to: {
        hour: String,
        minute: String
    },
    date: {
        month: String,
        day: String
    },
    add: {
        comment: String
    },
    month: String,
    year: String,
    noTime: Boolean
});

export default mongoose.model('Time', schema);

// module.exports.getTimes = function(cb, limit) {
//     Time.find(cb).limit(limit);
// }