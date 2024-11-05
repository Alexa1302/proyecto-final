import React, {useState} from 'react'
import Styles from "../Styles/RankingNacional.css"
import img3 from "../Assets/img3.png"

const RankingNacional = () => {
    const dato = [
        { id: 1, name: 'Mark', puntaje:100, handle: '@mdo', country:"Colombia" },
        { id: 2, name: 'Jacob', puntaje:70, handle: '@fat', country:"Colombia"  },
        { id: 3, name: 'Larry', puntaje:50, handle: '@twitter', country:"Colombia" }
        ];
        
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([/* tus datos aquí */]);

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className='container_1'>
      <div className='containerr_img'>
        <img src={img3} alt='fondo' className='img-3'/>
        <h2  className='titulo'>Depura los estereotipos y compila un futuro igualitario.</h2>
      </div>
      <div  className='busqueda_2'>   
                
                <input
                type="text_2"
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
    <tr className='collor-2'>
    <th>#</th>
    <th>Nombre</th>
    <th>Puntuación</th>
    <th>Usuario</th>
    <th>Pais</th>
    </tr>
    <tr >
    <th>1</th>
    <th>Paula Lopez Silgado</th>
    <th>300</th>
    <th>@paullosil</th>
    <th>Colombia</th>
    </tr>
    <tr className='collor-2'>
    <th>2</th>
    <th>Marta Roldan Rojas</th>
    <th>299</th>
    <th>@MartRol</th>
    <th>Colombia</th>
    </tr> 
    <tr>
    <th>3</th>
    <th>Maria Nelly Rojas </th>
    <th>290</th>
    <th>@mariaro</th>
    <th>Colombia</th>
    </tr>
    <tr className='collor-2'>
    <th>4</th>
    <th>Manuela Zapata Diaz</th>
    <th>280</th>
    <th>@Mandiaz</th>
    <th>Colombia</th>
    </tr>
    <tr >
    <th>5</th>
    <th>Luisa Rojas De las aguas</th>
    <th>270</th>
    <th>@LuisRojas</th>
    <th>Colombia</th>
    </tr>
    <tr className='collor-2'>
    <th>6</th>
    <th>Narlis Ruiz Blanco</th>
    <th>260</th>
    <th>@NarlisBlanco</th>
    <th>Colombia</th>
    </tr>
    <tr>
    <th>7</th>
    <th>Kiara reyes Sanchez</th>
    <th>270</th>
    <th>@Kiarrey</th>
    <th>Colombia</th>
    </tr>
    <tr className='collor'>
    <th>8</th>
    <th>Kenia Suarez</th>
    <th>260</th>
    <th>@KenSUar</th>
    <th>Colombia</th>
    </tr>
    <tr>
    <th>9</th>
    <th>Alexandra Hidalgo Ceren</th>
    <th>250</th>
    <th>@Rivmaes</th>
    <th>Colombia</th>
    </tr>
    <tr className='collor-2'>
    <th>10</th>
    <th>Luciana Estefany Villaceleste</th>
    <th>258</th>
    <th>@Luci</th>
    <th>Colombia</th>
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
  )
}

export default RankingNacional;