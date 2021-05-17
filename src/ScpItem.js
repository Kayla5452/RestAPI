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
    };

    return(
        <div className="card mt-2 mb-2 bg-dark text-light">
            <h1 className="card-header">{item.scpNumber}</h1>
            <div className="card-body bg-light text-dark">
                <h2 className="card-title">Item #{item.scpNumber}</h2>
                <h3>Object Class: {item.scpObjectClass}</h3>
                <h4>Special Containment Procedures</h4>
                <p>{item.scpSCP}</p>
                <h4>Description</h4>
                <p>{item.scpDescription}</p>
                <img src={item.scpImage}/>
            </div>
        </div>
    );
}

export default ScpItem;