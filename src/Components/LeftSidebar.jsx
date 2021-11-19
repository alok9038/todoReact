import React from "react";

const LeftSidebar = () =>{
    return(
        <>
            <div className="position-fixed w-25">
                <div className="card left-div border-0 rounded-15 cws-shadow">
                    <div className="card-header border-0 bg-secondary py-4 rounded-tlr-15">
                        
                    </div>
                    <div className="card-body">
                        <div className="rounded-circle bg-dark user-dp mx-auto"></div>
                        <h5 className="text-center">Hello Jane Doe!</h5>
                        <hr />
                        <h6>Connections : <span className="">7</span></h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSidebar;