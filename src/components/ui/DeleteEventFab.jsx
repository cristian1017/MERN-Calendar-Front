import React from 'react';
import { useDispatch } from 'react-redux';
import { eventStartDelete } from '../../actions/events';

export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleDeletedEvent  = () => {
        dispatch(eventStartDelete())

    }


    return (
        <button className="btn btn-danger fab-danger" onClick={ handleDeletedEvent }>
            <i className="fas fa-trash"></i>
            <span>Borrar evento</span>
        </button>
    )
}
