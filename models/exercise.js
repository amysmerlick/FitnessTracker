const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({

    name: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "Cardio"
    },
    distance: {
        type: Number
    },
    duration: {
        type: Number,
        default: 0
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    }
  
});

const Workout = mongoose.model("Exercise", WorkoutSchema);

module.exports = Workout;