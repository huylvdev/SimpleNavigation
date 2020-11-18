import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { showModal, hideModal } from '../src/redux/action';
import store from '../src/redux/store';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    open() {
        store.dispatch(showModal('headerparam', <View param='abc' />, null, null, true))
    }
    close() {
        store.dispatch(hideModal(null, false))
    }

    render() {
        const { Reduxtest, } = this.props
        console.log('Reduxtest', Reduxtest)
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.open()}   >
                    <Text> Cick Open</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.close()}>
                    <Text> Cick Close</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


//hàm này sau này dùng thay cho dispatch trực tiếp từ store
const mapDispatchToProps = (dispatch) => {
    return {


    };
}

// hàm này để gọi modal mes trong redux ra 
const mapStateToProps = state =>
    ({
        Reduxtest: state.modalMessage
    })

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home)
