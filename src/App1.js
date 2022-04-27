
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Content1 from './components/pages/Content1';
import Content4 from './components/pages/Content4';
import HomeTable from './components/Table/HomeTable';


function App1(props) {
    const { Header } = Layout;
    console.log(props);
    return (
        <Layout className='mainLayout'>
            {/* <Router>
                <Routes>
                    <Route path="/" element={<HomeTable />} />
                    <Route path="/Content1" element={<Content1 />} />
                </Routes>
            </Router> */}

            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomeTable />} />
                    <Route exact path="/Content1" element={<Content1 record={props} />} />
                    <Route exact path="/Content/id=" element={<Content1 record={props} />} />
                    <Route element={<Content4 />} path="/Content4" />
                </Routes>
                {/* <Routes>
                    <Route element={<Content4 />} path="/Content4" />
                </Routes> */}
            </BrowserRouter>
        </Layout>

    )
}

export default App1;