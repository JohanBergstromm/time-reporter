import express from 'express';
import timeBank from 'models/time-bank';

const router = express.Router();

router.post('/get-monthly-time', async function(req, res) {
    var monthTimes = await timeBank.find({ month: req.body.month });

    if (typeof monthTimes !== 'undefined' && monthTimes.length > 0) {
        res.json(monthTimes);
    } else {
        console.log('No time registered');
        res.send('No time registered')
    }
});

export default router;