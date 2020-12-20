import React from 'react';
import { Link } from 'react-router-dom';
const Progress = () => {
    return (
        <div class="row justify-content-center" >
        <button type="button" class="btn text-white m-2 my-2" style={{backgroundColor: "#1B74D0"}}>Previous</button>
        <button type="button" class="btn text-white m-2 my-2" style={{backgroundColor: "#1B74D0"}}>Save</button>
        <button type="button" class="btn text-white m-2 my-2" style={{backgroundColor: "#1B74D0"}}>Next</button>
        </div>
    );
};

export default Progress;