import { useMutation } from "@tanstack/react-query";
import { API } from "../apis";
import { useState } from "react";


const __getOneUser = async (payload) => {
  const getPost = await API.getOneUser(payload)
  return getPost;
}

export const useGetOneUser = () => {
  return useMutation({
    mutationFn: __getOneUser,
    onSuccess: () => {console.log('success')},
    onError: () => {console.log('failed')},
  });
}


const __register = async (payload) => {
  const regi = await API.postRegister(payload);
  return regi;
};

export const usePostRegister = () => {
  return useMutation({
    mutationFn: __register,
    onSuccess: () => {},
    onError: () => {},
  });
};

const __login = async (payload) => {
  const login = await API.postLogin(payload);
  return login;
};

export const usePostLogin = () => {
  const [response, setResponse] = useState({})

  const { mutate, ...mutationResult } = useMutation({
    mutationFn: __login,
    onSuccess: (data) => {
      setResponse({data});
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });

  console.log('pp', response)

  return { mutate, responseData: response, ...mutationResult }; 
};

