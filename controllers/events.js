const { response } = require('express');

const getEvents = async( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'get'
    });
}

const createEvent = async( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'create'
    });
}

const updateEvent = async( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'update'
    });
}

const deleteEvent = async( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'delete'
    });
}



module.exports = {getEvents, createEvent, updateEvent, deleteEvent}
