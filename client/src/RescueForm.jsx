import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PhotoInput from './Components/PhotoInput';

function RescueForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
        Name: '',
        Address: '',
        Website: '',
        Email: '',
        Phone: '',
        Services: '',
        Fee: '',
        Logo: '',
        Animals: '',
    });
    const [isConfirmDeleteShowing, setConfirmDeleteShowing] = useState(false)

    useEffect(() => {
        if (id) {
            fetch(`/api/rescues/${id}`)
                .then((response) => response.json())
                .then((json) => setData(json));
        }
    }, [id]);

    function onChange(event) {
        const newData = { ...data };
        newData[event.target.name] = event.target.value;
        setData(newData);
    }

    async function onSubmit(event) {
        event.preventDefault();
        try {
            let path = '/api/rescues';
            let method = 'POST';
            if (id) {
                path = `/api/rescues/${id}`,
                    method = 'PATCH'
            }
            const response = await fetch(path, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            console.log(json);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    function showConfirmDeleteModal() {
        setConfirmDeleteShowing(true)
    }

    function handleClose() {
        setConfirmDeleteShowing(false)
    }

    async function onDelete() {
        try {
            await fetch(`/api/rescues/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return <div className="container">
        <h1>Rescue Form</h1>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="Name">Name</label>
                <input type="text" id="Name" name="Name"
                    value={data.Name}
                    onChange={onChange}
                    className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Address">Address</label>
                <input type="text" id="Address" name="Address"
                    value={data.Address}
                    onChange={onChange}
                    className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Website">Website</label>
                <input type="text" id="Website" name="Website"
                    value={data.Website}
                    onChange={onChange}
                    className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Email">Email</label>
                <input type="text" id="Email" name="Email"
                    value={data.Email}
                    onChange={onChange}
                    className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Phone">Phone</label>
                <input type="text" id="Phone" name="Phone"
                    value={data.Phone}
                    onChange={onChange}
                    className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Services">Services</label>
                <input type="text" id="Services" name="Services"
                    value={data.Services}
                    onChange={onChange}
                    className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Fee">Fee</label>
                <input type="text" id="Fee" name="Fee"
                    value={data.Fee}
                    onChange={onChange}
                    className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Animals">Animals</label>
                <input type="text" id="Animals" name="Animals"
                    value={data.Animals}
                    onChange={onChange}
                    className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Logo">Logo</label>
                <PhotoInput id="Logo" name="Logo"
                    value={data.Logo} valueUrl={data.LogoUrl}
                    onChange={onChange}
                    className="card">
                    <div className="card-body">Click here or drag and drop here</div>
                </PhotoInput>
            </div>
            <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Submit</button>
                {id && <button onClick={showConfirmDeleteModal} type="button" className="btn btn-danger">Delete</button>}
            </div>
            <Modal show={isConfirmDeleteShowing} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this rescue?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={onDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </form>
    </div>
}

export default RescueForm;