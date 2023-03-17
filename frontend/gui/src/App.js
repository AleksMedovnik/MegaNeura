import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css'
import CustomLayout from './containers/Layout';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <CustomLayout>
      <MainContent />
    </CustomLayout>
  );
};

export default App;
