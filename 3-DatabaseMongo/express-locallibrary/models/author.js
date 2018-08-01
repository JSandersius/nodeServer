var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
    {
        first_name: { type: String, require: true, max: 100 },
        family_name: { type: String, require: true, max: 100 },
        date_of_birth: { type: Date },
        date_of_death: { type: Date },
    }
);

//Virtual for authors full name 
AuthorSchema
    .virtual('name')
    .get(function () {
        return this.family_name + ', ' + this.first_name;
    });