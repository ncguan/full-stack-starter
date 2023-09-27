import { Link } from 'react-router-dom';

function Item({ title }) {
    return (
        <div>{title} <Link to="/detail">link</Link></div>
    )
}

export default Item;