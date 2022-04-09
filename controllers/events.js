const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async( req, res = response ) => {
    const events = await Event.find().populate('user','name');
    res.json({
            ok: true,
            msg: events
    });
}

const createEvent = async( req, res = response ) => {
    const event = new Event(req.body); 
try{
    event.user = req.uid; 
    const eventSaved = await event.save(); 
    res.json({
            ok: true,
            event: eventSaved
            })
    } catch (error) {
        console.log(error)
        res.status(500).json({
                ok: false,
                msg: 'Contact the admin'
        });
    }
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
