import React, {useState} from 'react'
import Styles from "../Styles/RankingInternacional.module.css"
import { IoSearchSharp } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import img2 from "../Assets/img2.png";


const RankingInternacional= () => {
        const dato = [
    { id: 1, name: 'Mark', puntaje:100, handle: '@mdo', country:'Panama' },
    { id: 2, name: 'Jacob', puntaje:70, handle: '@fat', country:'Colombia' },
    { id: 3, name: 'Larry', puntaje:50, handle: '@twitter', country:'Peru' }
    ];
    
const [searchTerm, setSearchTerm] = useState('');
const [data, setData] = useState([/* tus datos aquí */]);

const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
);



return (
    <div className='container'>
        <div className='container-img'>
            <img src={img2} alt='carrusel' className='img-I'/>
            <div className='tablacon'>
                 <h1 >Rompiendo Barreras</h1>
                 <p>Conoce a las programadoras que lideran la revolución digital </p>
            </div>
            

        </div>
        
       
            <div  className='busqueda'>   
            
                    <input
                    type="text"
                    placeholder= " Buscar en la tabla"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <ul>
                    {filteredData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                    ))}
                    </ul>
            </div>
            <table className="table table-striped">
    <thead>
        <tr className='collor'>
        <th>#</th>
        <th>Nombre</th>
        <th>Puntuación</th>
        <th>Usuario</th>
        <th>Pais</th>
        </tr>
        <tr >
        <th>1</th>
        <th>Marta Ines Giraldo</th>
        <th>500</th>
        <th>@martGirl</th>
        <th>Israel</th>
        </tr>
        <tr className='collor'>
        <th>2</th>
        <th>Marilyn Paulina Restrepo Selgado</th>
        <th>499</th>
        <th>@MaryRes</th>
        <th>US</th>
        </tr> 
        <tr>
        <th>3</th>
        <th>Kyale Hoyos Sanchez</th>
        <th>455</th>
        <th>@Kyarasanc</th>
        <th>Colombia </th>
        </tr>
        <tr className='collor'>
        <th>4</th>
        <th>Estefany Sanchez Amaya</th>
        <th>445</th>
        <th>@Estefe</th>
        <th>China</th>
        </tr>
        <tr >
        <th>5</th>
        <th>Maria Dolly Rojas</th>
        <th>435</th>
        <th>@MariaDoll</th>
        <th>Panamá</th>
        </tr>
        <tr className='collor'>
        <th>6</th>
        <th>Yulissa Restrepo Correa</th>
        <th>420</th>
        <th>@YulissaRes</th>
        <th>USA</th>
        </tr>
        <tr>
        <th>7</th>
        <th>Karen Valoyes Silgado</th>
        <th>390</th>
        <th>@Karenvaloy</th>
        <th>Israel</th>
        </tr>
        <tr className='collor'>
        <th>8</th>
        <th>Lucia Naduska Reyna</th>
        <th>350</th>
        <th>@lucna</th>
        <th>Panamá</th>
        </tr>
        <tr>
        <th>9</th>
        <th>Maria esther Rivera Montolla</th>
        <th>300</th>
        <th>@Rivmaes</th>
        <th>Canada</th>
        </tr>
        <tr className='collor'>
        <th>10</th>
        <th>Luz Estela Diaz</th>
        <th>268</th>
        <th>@Luzdiaz</th>
        <th>Ecuador </th>
        </tr>
    </thead>
    <tbody>
        {data.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.puntaje}</td>
            <td>{item.handle}</td>
            <td>{item.country}</td>
        </tr>
        ))}
    </tbody>
    </table>
    <tbody>
        {data.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.puntaje}</td>
            <td>{item.handle}</td>
            <td>{item.country}</td>
        </tr>
        ))}
    </tbody>
    
    
    </div>

);
}

export default RankingInternacional;