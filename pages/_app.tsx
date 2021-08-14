
import 'styles/globals.scss'

const App = ({Component, pageProps}) => {
  return (
    <div className='app-root'>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
