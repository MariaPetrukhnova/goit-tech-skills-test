import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import { Layout } from './Layout';



const Home = lazy(() => import('../Views/Home'));
const Tweets = lazy(() => import('../Views/Tweets/Tweets'));

export default function App() {


  return (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/tweets" element={<Tweets/>} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
    )
}