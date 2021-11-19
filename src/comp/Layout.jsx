import React from 'react';
import Header from './Header';
import Insert from './insert';
import List from './list';

const Layout = () => {
    return (
        <React.Fragment>
            {/* <Header/> */}

           <div className="container mt-5">
                <Insert/>
                <List/>
           </div>
        </React.Fragment>
    )
}

export default Layout;