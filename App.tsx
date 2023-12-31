import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from "./src/routes";
import { MovieProviderProps } from './src/contexts/MovieContext';

export default function App() {
  return (
    <>
    <MovieProviderProps>
      <Routes />
      <StatusBar style="light" translucent backgroundColor="#242a32" />
      </MovieProviderProps>
    </>
  );
}

