import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";
import { Header } from "./Components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <Header>
          <App />
        </Header>
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
