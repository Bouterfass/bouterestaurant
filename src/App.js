
import { Header } from './components/Header';
import Introduction from './components/Introduction';
import Menu from './components/Menu';
import { Provider } from 'react-redux';
import  store  from '../src/store/store';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Introduction />
      <Menu />
    </Provider>
  );
}

export default App;
