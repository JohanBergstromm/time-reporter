import express from 'express';
import timeModel from 'models/time';

const router = express.Router();

router.get('/time-report', function(req, res) {
    timeModel.find(function(err, times) {
        res.render('time-report', {
            times
        });
    });
});

router.post('/times', async function(req, res) {

    timeModel.create(req.body).then(function(time) {
        res.json(time)
        console.log(time)
    });
    
    // const item = new timeModel(req.body);

    // const time = await item.save();

    // console.log(req.body, time);

    // res.json(time);
});

router.post('/times/:id', async function(req, res) {
    const time = await timeModel.findById(req.params.id);

    if (!time) {
        return res.status(400).send('Not found');
    }

    await time.remove();

    res.send('Removed');
});

export default router;