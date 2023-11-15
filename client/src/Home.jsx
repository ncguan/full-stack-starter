import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';
import { useState, useEffect } from 'react';

import Item from './Item';

function Home() {
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
        <div className="row">
          {data?.map((record) => <Item key={record.id} id={record.id} rescueName={record.Name} rescueLogo={record.Logo}></Item>)}
        </div>
      </main>
    </>
  );
}

export default Home;
