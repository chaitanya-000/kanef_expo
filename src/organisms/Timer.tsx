import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const Timer = ({ setShowOtpAgain }: any) => {
  const [seconds, setSeconds] = useState(60);
  const timerId = useRef();
  const startTimeRef = useRef(Date.now());

  const tick = () => {
    const currentTime = Date.now();
    const elapsedSeconds = Math.floor(
      (currentTime - startTimeRef.current) / 1000
    );
    const remainingSeconds = 60 - elapsedSeconds;

    if (remainingSeconds > 0) {
      setSeconds(remainingSeconds);
      requestTick();
    } else {
      setSeconds(0);
    }
  };

  const requestTick = () => {
    const delay = 1000 - ((Date.now() - startTimeRef.current) % 1000);
    timerId.current = setTimeout(() => {
      tick();
    }, delay);
  };

  useEffect(() => {
    requestTick();

    return () => {
      clearTimeout(timerId.current);
    };
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      clearTimeout(timerId.current);
      setShowOtpAgain(true);
    }
  }, [seconds]);

  return (
    <Text style={{ textAlign: "center", fontSize: responsiveFontSize(2) }}>
      We appreciate your patience. Verification code arriving in {seconds}{" "}
      seconds.
    </Text>
  );
};

export default React.memo(Timer);

const styles = StyleSheet.create({});
