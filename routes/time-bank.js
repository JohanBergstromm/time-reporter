import express from 'express';
import timeBank from 'models/time-bank';

const router = express.Router();

router.get('/time-bank', function(req, res) {
    timeBank.find(function(err, storages) {
        res.render('time-bank', {
            
        });
    });
});

router.post('/time-bank', function(req, res) {

    timeBank.create(req.body).then(function(storage) {
        res.json(storage)
        console.log(storage)
    });
    
    // const item = new timeModel(req.body);

    // const time = await item.save();

    // console.log(req.body, time);

    // res.json(time);
});


router.post('/get-monthly-time', async function(req, res) {
    var monthTimes = await timeBank.find({ month: req.body.month, year: req.body.year });

    if (typeof monthTimes !== 'undefined' && monthTimes.length > 0) {
        res.json(monthTimes);
    } else {
        console.log('No time registered');
        res.send('No time registered')
    }
});

// router.post('/time-bank/:id', async function(req, res) {
//     const storedTime = await timeBank.findById(req.params.id);

//     if (!storedTime) {
//         return res.status(400).send('Not found');
//     }

//     res.send(storedTime);
// });

router.post('/time-bank/:id', async function(req, res) {
    console.log(req.params)
    const times = await timeBank.findById(req.params.id);

    if (!times) {
        return res.status(400).send('Not found');
    }

    await times.remove();

    res.send('Removed');
});

export default router;