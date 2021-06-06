import React, {useState, useEffect} from 'react';
import Main from '../components/Main';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default (props) => {
    const {id} = props;
    const [book, setBook] = useState();
    const [loaded, setLoaded] = useState(false);

    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
        .then(response => {
            setBook(response.data)
            setLoaded(true)
        })
    },[]);

    // const editAuthor = (updatedAuthor) => {
    //     axios.put(`http://localhost:8000/api/authors/${id}`, updatedAuthor)
    //     .then(res => {
    //         console.log(res);
    //         navigate("/");
    //     })
    // }

    return(
        <div>
            <Link to="/">Home</Link>
            <div>
                <h4>Edit this Author</h4>
                {loaded && <Main  initialName={book.name}/>}
            </div>
        </div>
    )
}