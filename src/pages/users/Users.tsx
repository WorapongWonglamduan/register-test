import {useEffect, useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Register = ({userInfo}: any) => {
  const [user, setUser] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const onUpdateUserInfo = (text: string, name: string) => {
    setUser(prev => ({...prev, [name]: text}));
  };

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ชื่อ-นามสกุล:</Text>
      <TextInput
        style={styles.input}
        placeholder="กรอกชื่อ-นามสกุล"
        onChangeText={text => onUpdateUserInfo(text, 'fullName')}
        value={user?.fullName}
        editable={false}
      />

      <Text style={styles.label}>ที่อยู่:</Text>
      <TextInput
        style={styles.input}
        placeholder="กรอกที่อยู่"
        onChangeText={text => onUpdateUserInfo(text, 'address')}
        value={user?.address}
        editable={false}
      />

      <Text style={styles.label}>เบอร์โทรศัพท์:</Text>
      <TextInput
        style={styles.input}
        placeholder="กรอกเบอร์โทรศัพท์"
        onChangeText={text => onUpdateUserInfo(text, 'phoneNumber')}
        value={user?.phoneNumber}
        keyboardType="numeric"
        editable={false}
      />

      <Text style={styles.label}>อีเมล:</Text>
      <TextInput
        style={styles.input}
        placeholder="กรอกอีเมล"
        onChangeText={text => onUpdateUserInfo(text, 'email')}
        value={user?.email}
        keyboardType="email-address"
        editable={false}
      />
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
    color: '#000',
  },
});
