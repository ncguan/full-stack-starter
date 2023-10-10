import { Link } from 'react-router-dom';

function Item({ rescueName, rescueLogo, id }) {
    return (
        <div id="carouselExampleControls" className="carousel slide col-12 col-md-6 col-lg-4 p-2" data-ride="carousel">
            <div className="carousel-inner rounded shadow">
                <div className="carousel-item active d-flex flex-wrap align-items-center justify-content-center">
                    <img className="d-block w-100 img-responsive" src={`${rescueLogo}`} />
                    <Link to={`/detail/${id}`} className="carousel-caption text-left"><p className="p-2 rounded">{rescueName}</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Item;