import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";
import { ReactQuery } from "./Providers/ReactQueryProvider.jsx";
import { Toaster } from "react-hot-toast";
import { AppWithHeader } from "./Components/Header/AppWithHeader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* React Query */}
    <Toaster />
    <ReactQuery>
      <BrowserRouter>
        <ChakraProvider>
          <AppWithHeader>
            <App />
          </AppWithHeader>
        </ChakraProvider>
      </BrowserRouter>
    </ReactQuery>
  </Provider>
);
