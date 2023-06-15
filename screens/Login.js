import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyledContainer, InnerContainer, PageLogo, PageTitle } from '../components/styles';

const Login = () => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('../assets/img/motor.png')} />
        <PageTitle>GGP EXPO</PageTitle>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Login;
