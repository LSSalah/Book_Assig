import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Books from '../components/Books';
import {Link} from '@reach/router';

export default () => {
    const [books, setBooks] = useState([]);

    axios.get('http://localhost:8000/api/books')
    .then(response => {
        setBooks(response.data);
    },[])

    return(
        <div>
            <Link to={"/"}>Add a Book</Link>
            <h4>We have Books :</h4>
            <Books books={books} />
        </div>
    )
}