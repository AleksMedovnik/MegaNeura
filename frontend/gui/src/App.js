import './App.css';
import 'antd/dist/reset.css'
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
