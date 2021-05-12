import React, {useState, useEffect} from 'react';

function ScpItem({match}){
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetchItem();
    }, []);


    const fetchItem = async () => {
        const url = `https://scpdatabase-0fe9.restdb.io/rest/data/${match.params.id}`;
        const data = await fetch(url, {method: 'GET',
        headers: 
        { 'cache-control': 'no-cache',
            'x-apikey': '6099da8fe3b6e02545eda6a8' }});
        const item = await data.json();
        setItem(item)
        console.log(item);
        console.log(item.scpSCP);
    };

    return(
        <div>
            <h1>{item.scpNumber}</h1>
            <h2>{item.scpObjectClass}</h2>
            <p>{item.scpSCP}</p>
            <p>{item.scpDescription}</p>
        </div>
    );
}

export default ScpItem;