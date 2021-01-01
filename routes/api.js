// REQUIREMENTS
const router = require("express").Router();
const Workout = require("../models/workouts.js");

// POST NEW WORKOUT
router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// UPDATE WORKOUT
router.put("/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((error) => {
            res.json(error);
        });
});

// GET ALL WORKOUTS
router.get("/workouts/range", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// GET LATEST WORKOUT
router.get("/workouts", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// EXPORTS
module.exports = router;
