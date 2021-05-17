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
        setItems(items)
    };
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><h2>SCP Foundation</h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav">
                        
                    <Link to="/" className="nav-link" aria-current="page"><li>Home</li></Link>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="dropdown-links" id="navbarDarkDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            SCP Items
                        </a>
                        <ul id="dropdown-links" class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            {items.map(item => (
                                <Link to={`/${item._id}`} className="dropdown-item"><li>{item.scpNumber}</li></Link>
                            ))}
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    )
}
 export default Navigation;