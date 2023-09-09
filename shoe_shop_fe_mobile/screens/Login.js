import { View, Text, Image, Pressable, TextInput, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { Alert} from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [user, setUser] = useState(null);
    const [checkLogined, setCheckLogined] = useState(false);
    useEffect(() => {
        getUserData();
        //console.log("check logined: " + checkLogined);
        if(checkLogined){
            navigation.navigate("BottomTabNavigation")
        }
      }, []);

      const getUserData = async () => {
        try {
            await AsyncStorage.getItem('userData')
            .then((userData) => {
                setUser(JSON.parse(JSON.stringify(userData)));
            });
            if (user !== null) {
                setCheckLogined(true);
            }
          } catch (error) {
            console.log(error);
          }
      };


    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [username, setUsername] = useState("kimngoc");
    const [password, setPassword] = useState("123456");
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleUsernameChange = (text) => {
        setUsername(text);
      };
      const handlePasswordChange = (text) => {
        setPassword(text);
      };

      const _userData = async (data) => {
        try {
          await AsyncStorage.setItem('userData', JSON.stringify(data));
        } catch (error) {
          console.log(error);
        }
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password
        };
        //console.log(newUser);
        axios
        .post(`${Constants.expoConfig.extra.apiURL}auth/login`, newUser)
        .then((res) => {
            //console.log(res.data);
            _userData(res.data);
            // await AsyncStorage.setItem('userData',JSON.stringify(res.data));

            Alert.alert(
                'Đăng nhập thành công',
                'Đăng nhập thành công.',
                [
                  { text: 'Close', onPress: () => console.log('Close button pressed') }
                ]
            );
            navigation.navigate("BottomTabNavigation")
        })
        .catch((err) => {
            console.log(err);
            Alert.alert(
                'Đăng nhập thất bại',
                'Tên tài khoản hoặc mật khẩu không đúng.',
                [
                  { text: 'Close', onPress: () => console.log('Close button pressed') }
                ]
              );
        })
        
        // const Logg = await loginUser(newUser, dispatch);
        // if (Logg) {
        //     navigate("BottomTabNavigation")
        // } else {
        //     Alert.alert(
        //         'Đăng nhập thất bại',
        //         'Tên tài khoản hoặc mật khẩu không đúng.',
        //         [
        //           { text: 'Close', onPress: () => console.log('Close button pressed') }
        //         ]
        //       );
        // };


    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}
                // onPress={handleSubmit}
            >
                
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Hi Welcome Back ! 👋
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Hello again yosu have been missed!</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            value={username}
                            onChangeText={handleUsernameChange}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            value={password}
                            onChangeText={handlePasswordChange}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.blue : undefined}
                    />

                    <Text>Remenber Me</Text>
                </View>

                <Button
                    title="Login"
                    filled
                    //onPress={() => navigation.navigate("BottomTabNavigation")}
                    onPress={handleSubmit}
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor: COLORS.blue
                    }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.blue,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or Login with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.blue,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login