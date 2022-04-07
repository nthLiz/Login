
import './App.css';
import { Row, Col } from 'antd';
import { Layout } from 'antd';

import Content1 from './components/pages/Content1';
import Content3 from './components/pages/Content3';
import Content4 from './components/pages/Content4';
import Content2 from './components/pages/Content2';
import AppHeader from './components/Common/AppHeader';
import Home from './components/pages/Home';
function App() {
  const { Header } = Layout;
  return (
    <Layout className='mainLayout'>
    <Header>
      <AppHeader/>
       <Home>

       </Home>
    </Header>
  
  </Layout>
      
   
  ) 
}

export default App;
                                                 