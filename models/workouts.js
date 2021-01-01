const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter a name for the exercise"
        },
        type: {
            type: String,
            trim: true,
            required: "Enter a type of exercise"
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
},
{
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual('totalDuration').get(function() {
    let total = 0;
    for (var i=0; i<this.exercises.length; i++){
        total += this.exercises[i].duration;
    }
   return total;
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
