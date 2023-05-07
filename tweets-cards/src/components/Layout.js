
import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
    return (<>
        <header style={{borderBottom: '1px solid gray', backgroundColor: '#5736A3'}}>
            <nav style={{ padding: '20px 80px' }}>
                <NavLink to='/' style={{ fontSize: '20px', textDecoration: 'none', fontFamily: 'Montserrat', color: '#EBD8FF'}}>Home</NavLink>
                <NavLink to='/tweets' style={{marginLeft: '40px', fontSize: '20px', textDecoration: 'none', fontFamily: 'Montserrat', color: '#EBD8FF'}}>Tweets</NavLink>
            </nav>
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    </>);
};