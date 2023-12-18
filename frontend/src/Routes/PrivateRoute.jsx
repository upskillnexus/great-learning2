import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api";
import { Box, Flex, Spinner } from "@chakra-ui/react";

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [load, setLoad] = useState(false);

  const check = () => {
    setLoad(true);
    api
      .get("user/check")
      .then((res) => {
        setLoad(false);
        setIsAuth(res?.data?.isAuth);
      })
      .catch((err) => {
        setLoad(false);
        console.log(err);
      });
  };

  useEffect(() => {
    check();
  }, []);

  // if (isAuth) {
  //   return <Navigate to="/" />;
  // }

  return load ? (
    <Flex align={"center"} justify={"center"} minH="100vh" w="full">
      <Spinner size={"xl"} />
    </Flex>
  ) : (
    children
  );
};

export default PrivateRoute;
