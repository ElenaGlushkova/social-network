//import React from 'react';

export const required = (value) => {
    return value ? undefined : 'Field is required'
};


export const maxLengthCreator = (maxLength) => (value) => {
    return (value && value.length < maxLength) ? undefined : `Max length is ${maxLength} symbols`
};