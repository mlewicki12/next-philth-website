
import Navigation from 'components/navigation';

import 'styles/_globals.scss'

const App = ({Component, pageProps}) => {
  return (
    <div className='app-root'>
      <Navigation />

      <div className='app-content'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default App;
