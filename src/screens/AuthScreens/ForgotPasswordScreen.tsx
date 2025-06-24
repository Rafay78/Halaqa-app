import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, Keyboard } from "react-native";
import OTPInput from "../../components/OTP/OTPInput";
import { ButtonContainer, ButtonText } from "../../components/OTP/styles";
import tw from "../../lib/tailwind";
import { useNavigation } from "@react-navigation/native";

function ForgotPasswordScreen() {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const maximumCodeLength = 5;
  const navigation = useNavigation()  

  useEffect(() => {
    let timer:NodeJS.Timeout = setInterval(()=>{},0);
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <Text style={tw`my-3 text-base text-black`}>Enter the OTP below:</Text>
      <OTPInput
        code={otpCode}
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}
      />

      <ButtonContainer
        disabled={!isPinReady}
        style={{
          backgroundColor: !isPinReady ? "#d3dce6" : "#000000",
        }}
      >
        <ButtonText
          style={{
            color: !isPinReady ? "black" : "#EEEEEE",
          }} onPress={() => navigation.goBack()}
        >
          Login
        </ButtonText>
      </ButtonContainer>

        <Text style={tw`text-black my-5`}>OTP Expires in {timeLeft}s</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ForgotPasswordScreen