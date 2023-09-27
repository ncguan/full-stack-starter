import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';

import Item from './Item';

function Home() {
  const staticContext = useStaticContext();
  return (
    <>
      <Helmet>
        <title>Home - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
      </Helmet>
      <main className="container">
        <h1>Home</h1>
        <Item title="test 1"/>
        <Item title="test 2"/>
      </main>
    </>
  );
}

export default Home;
