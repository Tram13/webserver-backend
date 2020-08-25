// TODO: dit afwerken, momenteel gewoon copy-paste van suggestioncontroller

import {API_URL} from "../constants/Constants";

const PackingListItemModel = require("../models/PackingListItemModel");
const {body, validationResult} = require('express-validator');
const baseUrl = API_URL + "/ardennen"; // TODO: wat moet er hier staan uiteindelijk?

// return all suggestions on GET
exports.suggestionsList = function (req, res) {
    PackingListItemModel.find().exec((err, suggestionsList) => {
            if (err) {
                res.status(500).json({
                    index: API_URL,
                    baseUrl: baseUrl,
                    suggestions: [],
                    error: err
                })
            }
            //Successful, so return
            else {
                res.status(200).json({
                    index: API_URL,
                    baseUrl: baseUrl,
                    suggestions: suggestionsList
                })
            }
        }
    );
};

// Create suggestion on POST.
exports.createSuggestionPost = [
    // Validate that the author/message field is not empty.
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
        const newSuggestion = new PackingListItemModel(
            {
                author: req.body.author,
                message: req.body.message
            }
        );
        if (!errors.isEmpty()) {
            // There are errors. Return 422 Unprocessable Entity
            res.status(422).json({suggestion: newSuggestion, errors: errors.array()});
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
    PackingListItemModel.findByIdAndDelete(req.params.suggestionID).exec((err, _) => {
        if (err) {
            res.status(500).json({
                index: API_URL,
                baseUrl: baseUrl,
                error: err
            });
        } else {
            res.status(200).json({message: "Deleted succesfully!"});
        }
    });
};

exports.getSuggestionByID = function (req, res) {
    PackingListItemModel.findById(req.params.suggestionID).exec(function (err, suggestion) {
        if (err) {
            return res.status(500).json({
                index: API_URL,
                baseUrl: baseUrl,
                error: err
            })
        } else {
            res.status(200).json({
                index: API_URL,
                baseUrl: baseUrl,
                suggestion: suggestion
            })
        }
    });
};

// Update suggestion on PATCH
exports.updateSuggestionPatch = [

    // Validate that the author/message field is not empty.
    body('author').trim().notEmpty().withMessage('Author is empty!')
        .matches(/^[A-Za-z\s]+$/).withMessage('Only alphanumerical characters are allowed in the name!'),
    body('message', 'Message is required!').trim().isLength({min: 1}),

    // Sanitize fields
    body(['author', 'message']).trim().escape(),

    // Process request after validation and sanitization.
    (req, res) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        // Create a suggestion object with escaped and trimmed data.
        const updatedSuggestion = {
            author: req.body.author,
            message: req.body.message
        };
        if (!errors.isEmpty()) {
            // There are errors. Return HTTP 422 Unprocessable Entity
            res.status(422).json({suggestion: updatedSuggestion, errors: errors.array()});
        } else {
            // Data from form is valid.
            // Update the suggestion in the database
            PackingListItemModel.findByIdAndUpdate(req.params.suggestionID, updatedSuggestion).exec((err) => {
                if (err) {
                    res.status(500).json({suggestion: undefined, error: err});
                } else {
                    res.status(200).json({suggestion: updatedSuggestion});
                }
            });
        }
    }
];