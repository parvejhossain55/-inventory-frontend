import React from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalContextProvider } from "./context/gobalContext";
import { AuthProvider } from "./context/useAuth";
import router from "./routes/root";

function App() {
  return (
    <>
      <AuthProvider>
        <GlobalContextProvider>
          <RouterProvider router={router} />
        </GlobalContextProvider>
      </AuthProvider>
      
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
