const router = require('express').Router()
const Workout = require('../models/workout')

router.get('/', async (req, res) => {

    let workouts = await Workout.aggregate([
        {
            $addFields: {
              totalDuration: { $sum: "$exercises.duration" }
            }
        },{
            $limit: 7
        }
    ])

    console.log(workouts)

    res.json(workouts)

/*
    Workout.find({}, (err, workouts) => {


        if (err) {
            res.status(500)
            res.send("THere was an error")
            return
        }

        res.json(workouts)

    })
    */
    

})

router.get('/range', async (req, res) => {

    let workouts = await Workout.aggregate([
        {
            $addFields: {
              totalDuration: { $sum: "$exercises.duration" }
            }
          }
    ])

    console.log(workouts)

    res.json(workouts)

})

router.put('/:id', (req, res) => {

    //Find the workout
    Workout.findOne({"_id": req.params.id}, (err, workout) => {
        console.log(workout)
        console.log(req.body)
        if (err) {
            res.status(500)
            res.json({msg: "There was an error retrieving that workout"})
            return
        }

        //Add the exercise to the exercises array
        workout.exercises.push(req.body)

        workout.save(err2 => {
            if (err2) {
                res.status(500)
                res.json({msg: "There was an error saving that exercise to the workout"})
            }

            res.json({meg: "Good"})
        })
    })


})

router.post('/', (req, res) => {

    let newWorkout = new Workout()

    newWorkout.save(err => {

        if (err) {
            res.status(500)
            res.json({error: "There was an error"})
        }

        res.json(newWorkout)
    })
})

module.exports = router