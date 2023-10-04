import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';
import { useState, useEffect } from 'react';

import Item from './Item';

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const token = 'patTCpkEfmeKpfapg.c4f05db316ffb810afa03cfba835c4c3256ebadc61c9b15316b83e396ee450f1';
    const url = 'https://api.airtable.com/v0/app0igU6SyNXNYHh6/rescues';
    fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    })
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
          {data?.records.map((record) => <Item key={record.id} id={record.id} rescueName={record.fields.Name} rescueLogo={record.fields.Logo[0].url}></Item>)}
        </div>
      </main>
    </>
  );
}

export default Home;
