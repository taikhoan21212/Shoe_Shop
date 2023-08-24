import React from 'react';
import SideMenu from "../layout/SideMenu";

export default props => (
    <div className="grid">
        
        <div className="main-content">
            <SideMenu>
                {props.children}
            </SideMenu>
        </div>
    </div>
);
    