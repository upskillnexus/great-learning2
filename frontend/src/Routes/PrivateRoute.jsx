import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import isAuth from "../Libs/Quirys/isAuth";

const PrivateRoute = ({ children }) => {
  const { data: check, isPending: loading, isSuccess: success } = isAuth();

  console.log(check);

  if (!check?.isAuth && success) {
    return <Navigate to="/login" />;
  }

  return loading ? (
    <Flex align={"center"} justify={"center"} minH="100vh" w="full">
      <Spinner size={"xl"} />
    </Flex>
  ) : (
    <>{children}</>
  );
};

export default PrivateRoute;
