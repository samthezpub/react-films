import React from 'react';

const FilmListing = (props) => {
    return (
        <div className='card' onClick={() => {
            console.log(props.film.name)
            
            document.getElementById('p_director').textContent = props.film.director;
            document.getElementById('p_description').textContent = props.film.description;
            document.getElementById('container_other').className = 'message';
            
        }}>
            <img width={'100px'} height={'150px'} src={props.film.image}></img>
            <span className='info'>
                <p>{props.film.name}</p>
                <p>{props.film.year}</p>
            </span>
        </div>
    );
}

export default FilmListing;
