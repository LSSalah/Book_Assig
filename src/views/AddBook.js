import React, {useState, useEffect} from 'react';
import Main from '../components/Main';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default () => {
    const [books, setBooks] = useState([]);
    const [errors, setErrors] = useState([]);

    const addNewBook = (newBook) => {
        axios.post('http://localhost:8000/api/books', newBook)
        .then(response => {
            setBooks([
                ...books,
                response.data
                ]);
            navigate("/");

        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    return(
        <div>
            <Link to="/books">Books</Link>
            <h4>Add a new Book</h4>
            <Main onSubmitProp={addNewBook} initialName={""} initialBook={""} errors={errors} />
        </div>
    )
}