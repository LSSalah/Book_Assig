import React from 'react';
import axios from 'axios';
import {UpdateBtn} from '../styles/Styles'


export default props => {
    const {bookId, successCallback} = props;

    const deleteBook =(e) => {
        axios.delete(`http://localhost:8000/api/books/${bookId}`)
        .then(res => successCallback(bookId));
    }
    return (
        <UpdateBtn onClick={deleteBook}>Delete</UpdateBtn>
    )
}
