import React from 'react';
import loader from './logo.svg';

export default function Loading() {
    return (
        <article className="loading">
            <img className="spinner" src={loader} height="200px" />
            <p>Loading...</p>
        </article>
    );
}