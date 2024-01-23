import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import api from "../api";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import isAuth from "../Libs/Quirys/isAuth";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate()
  const { data: check, isPending: loading, isSuccess: success } = isAuth();
  

  useEffect(() => {
    if (!check?.isAuth && !loading) {
      return navigate("/login");
    }
  },[!loading, success])

  return loading ? (
    <Flex align={"center"} justify={"center"} minH="100vh" w="full">
      <Spinner size={"xl"} />
    </Flex>
  ) : (
      <Outlet />
    );
  };
  
  export default PrivateRoute;
  
  // <>{children}</>