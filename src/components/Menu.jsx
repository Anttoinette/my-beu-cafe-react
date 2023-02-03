import { useState } from "react";
import './menu.css';
export default function Menu() {
const [ coffees, setCoffees ] = useState()
const getCoffees = (temp) => {
    fetch(`https://api.sampleapis.com/coffee/${temp}`)
    .then(res => res.json())
    .then(setCoffees)
    .catch(alert)
}

    return (
        <article>   
    <div>
        <button onClick={ () => getCoffees('hot')}>Hot Coffees</button>
        <button onClick={ () => getCoffees('iced')}>Iced Coffees</button>
     </div>
        {!coffees
        ? <h2>Welcome</h2>
        : <section className="coffee-container">
            {coffees.map(coffee => (
            <div key={coffee.id} className="coffee-card">
            <img src={coffee.image} alt={coffee.title}/>
            <h3>{coffee.title}</h3>
            <p>{coffee.description}</p>
            </div>
            ))}
        </section>
        }
     </article>
     );
    }