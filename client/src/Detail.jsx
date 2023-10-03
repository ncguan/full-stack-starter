import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';

function Detail() {
    const staticContext = useStaticContext();
    return (
        <>
            <Helmet>
                <title>Rescue Name - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
            </Helmet>
            <main className="container">
                <div className="row border rounded shadow custom-card">
                    <div className="col-12 col-md-6 p-3">
                        <img className="d-block w-100" src="https://imgs.search.brave.com/Mdu0eNUo8V0LDBDTOjKyCClbIfpBy66myk2kQF9cC8Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXNp/Z25zaGFjay5uZXQv/d3AtY29udGVudC91/cGxvYWRzL3BsYWNl/a2l0dGVuLmpwZw" alt="First slide" />
                    </div>
                    <div className="col-12 col-md-6 p-3 align-self-center">
                        <h2>Rescue Name</h2>
                        <p>Address</p>
                        <p>Email</p>
                        <p>Phone</p>
                        <p>Website</p>
                    </div>
                </div>
            </main>
            <div class="accordion shadow mt-4 mb-4 ms-5 me-5" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Services
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Animals & Adoption Fees
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;