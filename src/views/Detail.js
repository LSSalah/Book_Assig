import React, { useEffect, useState } from 'react';
import {navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';
import {UpdateBtn} from '../styles/Styles'

export default props => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${props.id}`)
            .then(res => setBook({
                ...res.data
            }))
    }, [])

    return (
        <div>
            <h1>{book.name}</h1>
            <UpdateBtn onClick={(e) => navigate(`/`)}>Back</UpdateBtn>
            <UpdateBtn onClick={(e) => navigate(`/${book._id}/edit`)}>Edit</UpdateBtn>
            <DeleteButton bookId={book._id} successCallback={() => navigate("/")} />
        </div>
    )
}