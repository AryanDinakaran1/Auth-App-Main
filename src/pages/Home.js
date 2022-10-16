import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() { 

    const [val, setVal] = useState();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/")
        .then((res) => {
            var finalResponse = JSON.stringify(res.data);
            setVal(finalResponse);
            console.log(val);
        })
        .catch((err) => {
            console.log(err);
        });
    })

    return(
        <div>
            <h1>Home</h1>
            <p>{val}</p>
        </div>
    );
}

export default Home;