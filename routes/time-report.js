import express from 'express';
// import bookingModel from 'models/booking';

const router = express.Router();

router.get('/time-report', async function(req, res) {
    // const bookings = await bookingModel.find();
    res.render('time-report', {
        
    });
});

export default router;
