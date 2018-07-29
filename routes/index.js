import express from 'express';
// import bookingModel from 'models/booking';

const router = express.Router();

router.get('/', async function(req, res) {
    // const bookings = await bookingModel.find();
    res.render('index', {});
});

export default router;
