import React, {useState} from 'react';
import {navigate} from '@reach/router';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from '../styles/Styles';

export default props => {
    const {initialName, initialBook, onSubmitProp} = props;
    const [name, setName] = useState(initialName);
    const [book, setBook] = useState(initialBook);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name , book});
    }
    return (
        <div>
            <TheForm onSubmit={onSubmitHandler}>
                <FormGroup>
                    <FillLabel>Name</FillLabel>
                    <MainInput type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                    <hr/>
                    <FillLabel>Book</FillLabel>
                    <MainInput type="text" value={book} onChange={(e) => {setBook(e.target.value)}}/>
                </FormGroup>
                <RoundedBtn type="submit">Submit</RoundedBtn>
            </TheForm>
        </div>
    )
}