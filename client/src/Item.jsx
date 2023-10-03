import { Link } from 'react-router-dom';
import './App.scss'

function Item({ title }) {
    return (
       

            <div id="carouselExampleControls" className="carousel slide col-12 col-md-6 col-lg-4 p-2" data-ride="carousel">
                <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://imgs.search.brave.com/Mdu0eNUo8V0LDBDTOjKyCClbIfpBy66myk2kQF9cC8Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXNp/Z25zaGFjay5uZXQv/d3AtY29udGVudC91/cGxvYWRzL3BsYWNl/a2l0dGVuLmpwZw" alt="First slide" />
                        <p className="carousel-caption">Some text here </p>
                    </div>
                </div>
            </div>

    )
}

export default Item;