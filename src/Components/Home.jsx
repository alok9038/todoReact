import React from 'react';
import LeftSidebar from './LeftSidebar';
import Posts from './Posts';
import RightSidebar from './RightSidebar';

const  Home = () => {
    return(
        <>
            <div className="container mt-4">
                <div className="row ">
                    <div className="col-lg-4 d-lg-flex d-none">
                        <LeftSidebar/>
                    </div>
                    <div className="col-lg-4 p-lg-0">
                        <Posts/>
                    </div>
                    <div className="col-lg-4 d-lg-flex d-none">
                        <RightSidebar/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home;