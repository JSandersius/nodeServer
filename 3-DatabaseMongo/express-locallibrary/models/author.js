var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//this scheme defines an author as having String SchemaTypes
//for the first and family names, that are required and have a maximum of 100 characters,
//and Date fields for the date of birth and death
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

//Virtual for authors URL
AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author' + this._id;
    });

//Export Model
module.exports = mongoose.model('Author', AuthorSchema);