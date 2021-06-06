import React, {useState, useEffect} from 'react';
import {navigate, Link} from '@reach/router';
import DeleteButton from './DeleteButton';
import axios from 'axios';
import {UpdateBtn} from '../styles/Styles'
import styles from '../styles/Divert.module.css'

export default props => {
    const [books, setBooks] =useState([]);

    const removeFromDom = bookId => {
        setBooks(books.filter(books => books._id !== bookId))
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th><h1>Name</h1></th>
                        <th><h1>Book</h1></th>
                        <th><h1>Actions</h1></th>
                    </tr>
                    {props.books.map((book, idx)=>{
                        return (
                        <tr key={idx}>
                            <td><Link to={`/${book._id}`}><h1>{book.name}</h1></Link></td>
                            <td><h1>{book.book}</h1></td>
                            <td>
                                <DeleteButton bookId={book._id} successCallback={()=>removeFromDom(book._id)}/>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}