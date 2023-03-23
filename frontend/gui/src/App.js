import 'antd/dist/reset.css'
import './App.css';
import CustomLayout from './containers/CustomLayout';
import MainLayout from './containers/MainLayout';

const App = () => {
  return (
    <CustomLayout>
      <MainLayout />
    </CustomLayout>
  );
};

export default App;
