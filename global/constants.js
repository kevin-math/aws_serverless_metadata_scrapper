"use strict";

const constants = {

    statusCode:{
        BAD_REQ: 400,
        INTERNAL_ERR: 500,
        SUCCESS: 200
    },

    messages:{
        ValidUrlNeededMessage: "Valid URL need to be provided",
        InternalErr: "Something went wrong!",
        NotFound : "Url not found"

    }
};

module.exports = constants;
