import {useState, useEffect} from "react";
import {Link} from "react-router-dom"

function Navigation(){
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const url = "https://scpdatabase-0fe9.restdb.io/rest/data";
        const data = await fetch(url, {method: 'GET',
        headers: 
        { 'cache-control': 'no-cache',
            'x-apikey': '6099da8fe3b6e02545eda6a8' }});
        const items = await data.json();
        console.log(items);
        setItems(items)
    };
    return(
        <nav>
            <h3>SCP Foundations</h3>
            <ul>
                <Link to="/"><li>Home</li></Link>
                {items.map(item => (
                    <li key={item._id}><Link to={`/${item._id}`}>{item.scpNumber}</Link></li>
                ))}
                
            </ul>
        </nav>
    )
}
 export default Navigation;