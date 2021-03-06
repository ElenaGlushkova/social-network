import React from 'react';
import Header from "./Header";
import {authUser} from "../../redux/authReducer";
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authUser();
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {authUser})(HeaderContainer);