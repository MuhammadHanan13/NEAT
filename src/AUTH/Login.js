import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    StatusBar,cdf
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import {styles} from '../Style/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export default class Login extends React.Component{
//     constructor() {
//         super();
//         this.state = {
//             email: '',
//             password: '',
//             isloading: false,
//         }
//     }
// }

// userLogin = async () => {
//     this.setState({isloading: true});
//     try {
//         axios.post('https://pos-go.herokuapp.com/api/login', {
//             username: this.state.username,
//             password: this.state.password,
//         })
//         .then((result) => {
//             const {is_verified} = result.data.data;
//             const {role_id} = result.data.data;
//             const {token} = resutl.data;
//             this.props.userRole(role_id);
//             this.props.userToken(token);
//             this.props.userVerified(is_verfied);
//             if (token !==null || role_id !== null || is_verified !== null) {
//                 const token_Key = ['token', token];
//                 const role_Key = ['role', JSON.stringify(role_id)];
//                 this.state.box
//                 ? AsyncStorage.multiSet([token_Key, role_Key]).then(
//                     (value) => {
//                         this.setState({
//                             token_Key: value,
//                             role_Key: value,
//                         })

//                         console.log('--==Data Tersimpan==--'),

//                     }

//                     : console.log('--==Data Tidak Tersimpan==--')
                    
//                 )
//             }
//         })
//     }
// }

function Login(){
    render(){
        return(
            <View>

            </View>
        )
    }
}

export default Login