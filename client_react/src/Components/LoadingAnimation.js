import React from "react";

class LoadingAnimation extends React.Component {

    render() {
        return (
            <div align={"center"}>
                <h2>Requesting data from API...</h2>
                <div className="preloader-wrapper big active spinning-circle">
                    <div className="spinner-layer spinner-red-only">
                        <div className="circle-clipper left">
                            <div className="circle"/>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"/>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoadingAnimation