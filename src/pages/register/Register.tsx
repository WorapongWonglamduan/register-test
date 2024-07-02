import {useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Register = ({navigation}: any) => {
  const [user, setUser] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const onUpdateUserInfo = (text: string, name: string) => {
    setUser(prev => ({...prev, [name]: text}));
  };

  const handleSignup = () => {
    if (
      !user?.fullName ||
      !user?.address ||
      !user?.phoneNumber ||
      !user?.email
    ) {
      Alert.alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user?.email)) {
      Alert.alert('กรุณากรอกอีเมลให้ถูกต้อง');
      return;
    }
    const phoneRegex = /^[0-9]+$/;
    if (
      user?.phoneNumber.length !== 10 ||
      !phoneRegex.test(user?.phoneNumber)
    ) {
      if (!phoneRegex.test(user?.phoneNumber)) {
        Alert.alert('กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้องเป็นตัวเลขเท่านั้น');
        return;
      }
      Alert.alert('กรุณากรอกหมายเลขโทรศัพท์ให้ครบ 10 หลัก');
      return;
    }

    Alert.alert('สมัครสมาชิกสำเร็จ!');
    navigation.navigate('Welcome', {userInfo: user});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ชื่อ-นามสกุล:</Text>
      <TextInput
        style={styles.input}
        placeholder="กรอกชื่อ-นามสกุล"
        onChangeText={text => onUpdateUserInfo(text, 'fullName')}
        value={user?.fullName}
      />

      <Text style={styles.label}>ที่อยู่:</Text>
      <TextInput
        style={styles.input}
        placeholder="กรอกที่อยู่"
        onChangeText={text => onUpdateUserInfo(text, 'address')}
        value={user?.address}
      />

      <Text style={styles.label}>เบอร์โทรศัพท์:</Text>
      <TextInput
        style={styles.input}
        placeholder="กรอกเบอร์โทรศัพท์"
        onChangeText={text => onUpdateUserInfo(text, 'phoneNumber')}
        value={user?.phoneNumber}
        keyboardType="numeric"
      />

      <Text style={styles.label}>อีเมล:</Text>
      <TextInput
        style={styles.input}
        placeholder="กรอกอีเมล"
        onChangeText={text => onUpdateUserInfo(text, 'email')}
        value={user?.email}
        keyboardType="email-address"
      />

      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
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
            handleSignup();
          }}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>ลงทะเบียน</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
