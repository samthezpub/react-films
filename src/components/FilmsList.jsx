import React from 'react';
import films from './films';

const FilmsList = ({title, image, year, id}) => {
    return (
        <div style={{textAlign:'center'}}>
            <h3>Films</h3>
            <div style={{backgroundColor:'blue',border:'2px solid black',width: '15vw', height:'25vh',display: 'flex', flexDirection: 'column',alignItems: 'center'}} class='card'>

                    <p>
                    <img height='150px' width="100px" src={image} alt="poster" />
                    </p>
                    
                    <p style={{display:'flex', width:'15vw', justifyContent: 'space-evenly'}}>
                        <span>{title}</span>
                        <span>{year}</span>
                    </p>
            </div>
        </div>
    );
}

export default FilmsList;