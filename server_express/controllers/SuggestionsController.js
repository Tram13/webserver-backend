const SuggestionModel = require("../models/SuggestionModel");
const {body, validationResult} = require('express-validator');
const index = "https://api.tram13.me";
const baseUrl = index + "/suggestions";

// return all suggestions on GET
exports.suggestionsList = function (req, res) {
    SuggestionModel.find().exec((err, suggestionsList) => {
            if (err) {
                res.status(500).json({
                    index: index,
                    baseUrl: baseUrl,
                    suggestions: [],
                    error: err
                })
            }
            //Successful, so return
            else {
                res.status(200).json({
                    index: index,
                    baseUrl: baseUrl,
                    suggestions: suggestionsList
                })
            }
        }
    );
};

// Create suggestion on POST.
exports.createSuggestionPost = [
    // Validate that the voornaam/achternaam field is not empty.
    body('author').trim().notEmpty().withMessage('Author is empty!')
        .matches(/^[A-Za-z0-9\s]+$/).withMessage('Only alphanumerical characters are allowed in the name!'),
    body('message', 'Message is required!').trim().isLength({min: 1}),

    // Sanitize fields
    body(['author', 'message']).trim().escape(),

    // Process request after validation and sanitization.
    (req, res) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        // Create a gebruiker object with escaped and trimmed data.
        const newSuggestion = new SuggestionModel(
            {
                author: req.body.author,
                message: req.body.message
            }
        );
        if (!errors.isEmpty()) {
            // There are errors. Return 422 Unprocessable Entity
            res.status(422).json({gebruiker: newSuggestion, errors: errors.array()});
        } else {
            // Data from form is valid.
            // Save the suggestion in the database
            newSuggestion.save((err) => {
                if (err) {
                    res.status(500).json({suggestion: undefined, error: err})
                } else {
                    // Suggestion saved.
                    //TODO: in de json, return ook de url van de nieuwe suggestie?
                    res.status(200).json({suggestion: newSuggestion});
                }
            });
        }
    }
];

// Delete suggestion on DELETE
exports.deleteSuggestionDelete = function (req, res) {
    // deleting gebruiker
    SuggestionModel.findByIdAndDelete(req.params.suggestionID).exec((err, _) => {
        if (err) {
            res.status(500).json({
                index: index,
                baseUrl: baseUrl,
                error: err
            });
        } else {
            res.status(200).json({message: "Deleted succesfully!"});
        }
    });
};

exports.getSuggestionByID = function (req, res) {
    SuggestionModel.findById(req.params.suggestionID).exec(function (err, suggestion) {
        if (err) {
            return res.status(500).json({
                index: index,
                baseUrl: baseUrl,
                error: err
            })
        } else {
            res.status(200).json({
                index: index,
                baseUrl: baseUrl,
                suggestion: suggestion
            })
        }
    });
};