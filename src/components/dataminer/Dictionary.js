import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const Dictionary = () => {
    // i jus wanna grab sum data aka testin out apis
    let res = null;
    const key = '';
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=${key}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b14413fe79msh57c665f5772b700p1205c0jsn83c2a1015513",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
    })
    .then(response => {
        res = response.statusText;      console.log(response.statusText);
    })
    .catch(err => {
        console.error(err);
    });

    return(
        <ErrorBoundary>
            <div>
                <p>{res}</p>
            </div>
        </ErrorBoundary>
    )
}