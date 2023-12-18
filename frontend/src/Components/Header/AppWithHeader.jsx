import { useLocation } from "react-router-dom";
import { Header } from "./Header";

export const AppWithHeader = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {/*  */}
      {location.pathname == "/login" ? (
        <>{children}</>
      ) : (
        <Header>{children}</Header>
        //
      )}
    </>
  );
};
