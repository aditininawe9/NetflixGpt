import './App.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Body from './components/Body';

export function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  )
}
