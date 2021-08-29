
import Head from 'next/head';
import Navigation from 'components/navigation';

import 'styles/_globals.scss'

const App = ({Component, pageProps}) => {
  return (
    <div className='app-root'>
      <Head>
        <title>{pageProps.title ?? 'Philth Zine'}</title>
        <link rel='shortcut icon' href='philth.png' />
      </Head>

      <Navigation />

      <div className='app-content'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default App;
