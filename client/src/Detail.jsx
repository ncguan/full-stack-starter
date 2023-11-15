import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Detail() {
    const staticContext = useStaticContext();
    const { id } = useParams();

    const [data, setData] = useState();

    useEffect(() => {
        fetch(`/api/rescues/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data)
            });
    }, [id]);

    return (
        <>
            <Helmet>
                <title>Rescue Name - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
            </Helmet>
            <main className="container">
                <div className="row border rounded shadow custom-card">
                    <div className="img-container col-12 col-md-6 p-3 d-flex flex-wrap align-items-center justify-content-center">
                        <img className="d-block w-100" src={`${data?.Logo[0].url}`} alt="First slide" />
                    </div>
                    <div className="col-12 col-md-6 p-3 align-self-center">
                        <h2>{data?.Name}</h2>
                        {data?.Address == 'N/A' ? "" : <p>{data?.Address}</p>}
                        {data?.Email == 'N/A' ? "" : <p>{data?.Email}</p>}
                        {data?.Phone == 'N/A' ? "" : <p>{data?.Phone}</p>}
                        <p>{data?.Website}</p>
                    </div>
                </div>
            </main>
            <div className="accordion shadow mt-4 mb-4 ms-5 me-5" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Services
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Animals & Adoption Fees
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;