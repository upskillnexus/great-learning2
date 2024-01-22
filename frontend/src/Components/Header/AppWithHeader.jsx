import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import isAuth from "../../Libs/Quirys/isAuth";
import ScreenHeader from "./ScreenHeader";

export const AppWithHeader = ({ children }) => {
  const location = useLocation();  
  const paths = ['/login']

  return (
    <>
      {paths?.includes(location?.pathname) ? (
        <>{children}</>
      ) : (
        <ScreenHeader>{children}</ScreenHeader>
      )}
    </>
  );
};
