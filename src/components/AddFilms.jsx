import React from 'react';
import films from '../films';
import App from '../App';

const AddFilms = (props) => {
    function AddFilm() {
        let name = document.getElementById('name').value;
        let director = document.getElementById('director').value;
        let description = document.getElementById('description').value;
        let image = document.getElementById('image').value;
        let year = document.getElementById('year').value;
        const filmsCount = films.length;
        let id = filmsCount + 1;
        let film = {id,name,year,image,director,description};
        films.push(film);
        console.log(films);
        let cards = document.getElementById("cards");
        let card = document.createElement('div');
        card.className = 'card';
        let cardImage = document.createElement('img');
        let span = document.createElement('span');
        let p1 = document.createElement('p');
        p1.append(name);
        let p2 = document.createElement('p');
        p2.append(year);
        span.append(p1);
        span.append(p2);
        cardImage.src = image;
        cardImage.width = '100';
        cardImage.height = '150';
        console.log(cardImage)
        card.append(cardImage);
        card.append(span);
        card.onclick = () => 
        {
            console.log(name)
        }

        cards.append(card);

    }
    
    return (
        <div>
            
            <form method='post'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name'/>

                <label htmlFor="Director">Director</label>
                <input type="text" name='Director' id='director'/>

                <label htmlFor="Description">Description</label>
                <input type="text" name='Description' id='description'/>

                <label htmlFor="year">Year</label>
                <input type="number" name='year' id='year'/>

                <label htmlFor="image">Image</label>
                <input type="text" name='image' id='image'/>
                

            </form>
            <button onClick={() => AddFilm()}>Add</button>
        </div>
    );
}

export default AddFilms;
