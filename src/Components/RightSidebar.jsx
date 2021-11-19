import React from "react";

const RightSidebar = () =>{
    return(
        <>
            <div className="position-fixed px-3 mx-auto w-25">
                <div className="card right-div border-0 rounded-15 cws-shadow">
                    <div className="card-header border-bottom bg-transparent">
                        <h6>Connections</h6>                 
                    </div>
                    <div className="card-body">
                        <div className="connection mb-4 d-flex">
                            <div className="img rounded-circle bg-dark p-4"></div>
                            <div className="name mt-2 ms-2">
                                Jonathan Doe
                            </div>
                        </div>
                        <div className="connection mb-4 d-flex">
                            <div className="img rounded-circle bg-dark p-4"></div>
                            <div className="name mt-2 ms-2">
                                Jonathan Doe
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSidebar;