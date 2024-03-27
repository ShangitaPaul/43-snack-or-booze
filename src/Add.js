import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemForm from './ItemForm';

function Add() {
    const [item, setData] = useState('');

    if (data) {
        return (
            <div>
                <p> {data.item} added successfully! </p>
                <Link to="/">Back to home</Link>
            </div>
        )
    }

    return <ItemForm setData={setData} />
}

export default Add;
            