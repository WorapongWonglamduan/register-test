import {Text, TouchableOpacity, View} from 'react-native';
import Users from '../users/Users';

type PropsType = {
  navigation: any;
  route: any;
};

const HomeScreen = ({route, navigation}: PropsType) => {
  const {params = {}} = route;
  const {userInfo = null} = params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: userInfo ? 'none' : 'center',
        alignItems: userInfo ? 'none' : 'center',
      }}>
      {userInfo && <Users navigation={navigation} userInfo={userInfo} />}

      <View
        style={{
          paddingHorizontal: 20,
          bottom: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            paddingVertical: 20,
            paddingHorizontal: 20,
            backgroundColor: 'lightgray',
            borderRadius: 10,
            width: '50%',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>ลงทะเบียน</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
