import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import ListMemberComponent from "../member/ListMemberComponent";
import AddMemberComponent from "../member/AddMemberComponent";
import EditMemberComponent from "../member/EditMemberComponent";

const RouterComponent = () => {
    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Route path="/" exact={true} component={ListMemberComponent}/>
                    <Route path="/member" exact={true} component={ListMemberComponent}/>
                    <Route path="/add-member" exact={true} component={AddMemberComponent}/>
                    <Route path="/edit-member" exact={true} component={EditMemberComponent}/>
                </div>
            </BrowserRouter>
        </div>
    );
};
const style = {
    margin: '10px'
}
export default RouterComponent;