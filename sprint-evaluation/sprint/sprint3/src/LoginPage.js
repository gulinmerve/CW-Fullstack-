import React from 'react'
import { SafeAreaView, View, ScrollView, KeyboardAvoidingView, StyleSheet, Image, Dimensions, Platform } from 'react-native'

import { MyInput, MyButton } from './components'

const LoginPage = () => {

  const onLogin = () => {
    console.log("Login pressed")
  }

  const onSign = () => {
    console.log("Sign pressed")
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.container}
      >
        <ScrollView style={{ flex: 1 }} bounces={false}>
          <View style={{ flex: 1 }}>

            <Image
              style={styles.imageStyle}
              source={require('./assets/cart.png')}
            />


            <MyInput type="email-address" myPlace="E-posta giriniz.." />
            <MyInput myPlace="Şifre giriniz.." />

            <MyButton myTitle="Giriş Yap" myPress={onLogin} />
            <MyButton myTitle="Kayıt Ol" myPress={onSign} />

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#80cbc4"
  },
  imageStyle: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 3,
    resizeMode: "contain",
    alignSelf: "center",
  }
})

export default LoginPage