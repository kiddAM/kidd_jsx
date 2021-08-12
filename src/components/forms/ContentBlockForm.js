import React from 'react';
import { ContentBlock } from '../ContentBlock';
import { GeneralError } from '../ErrorHandler';

export const ContentBlockForm = () => {
    const handleSubmit = event => {
        try {
            event.preventDefault();
            console.log('submitting...', event.value);
        } catch (error) {
            GeneralError(error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    <p>short name</p>
                    <input type="text" name="shortname">shortname</input>
                </label>
                <label>
                    <p>verbose name</p>
                    <input type="text" name="verbosename">verbosename</input>
                </label>
                <label>
                    <p>text</p>
                    <input type="text" name="text">text</input>                </label>
                <label>
                    <p>icon image</p>
                    <input type="text" name="image-url-1"></input>
                </label>
                <label>
                    <p>highlight image</p>
                    <input type="text" name="image-url-2"></input>
                </label>
                <label>
                    <p>link</p>
                    <input type="text" name="url"></input>
                </label>
            </fieldset>
            <button type="submit">submit</button>
        </form>
    )
}