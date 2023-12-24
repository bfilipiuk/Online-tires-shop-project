import React from "react";
import { ColorRing } from "react-loader-spinner";
import "./Loader.css"

const Loader = () => {
    return (
        <div className="loader-cont">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#0540a2', '#0540a2', '#0540a2', '#0540a2', '#0540a2']}
            />
        </div>
    );
}

export default Loader;