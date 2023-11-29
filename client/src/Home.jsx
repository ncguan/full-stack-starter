import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useStaticContext } from './StaticContext';
import { useAuthContext } from './AuthContext';

import Item from './Item';

function Home() {
  const { user } = useAuthContext();
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api/rescues')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data)
      });
  }, []);

  const staticContext = useStaticContext();
  return (
    <>
      <Helmet>
        <title>Home - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
      </Helmet>
      <main className="container">
        <h1 className="text-center">San Francisco Animal Rescues and Shelters</h1>
        {user && <div className="mb-3">
          <Link to="/rescues/new">Create a new rescue</Link>
        </div>}
        <div className="row">
          {data?.map((record) => <Item key={record.id} id={record.id} rescueName={record.Name} rescueLogo={record.LogoUrl}></Item>)}
        </div>
      </main>
    </>
  );
}

export default Home;
