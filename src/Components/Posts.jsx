import React from 'react';

const Posts = () =>{
    return(
        <>
            <div className="post-div">
                <div className="card border-0 cws-shadow rounded-15">
                    <div className="card-body">
                        <form action="{{ route('create.post') }}" method="post">
                            <div className=" d-flex">
                                <div className="bg-dark rounded-circle p-4 px-4"></div>
                                <div className="ms-3"><input type="text" size="35" placeholder=" what's in your mind."
                                        name="message" className="form-control bg-light shadow-none rounded-25"/></div>
                            </div>
                            <hr className="bg-secondary"/>
                            <div className="row">
                                <div className="col small"><i className="fa fa-images" ></i> Photo</div>
                                <div className="col small d-flex"><i className="fa fa-video me-2"></i>
                                    video</div>
                                <div className="col small d-flex"><i className="fa fa-smile me-2"></i>
                                    feeling/activity</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts;