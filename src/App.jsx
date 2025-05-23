import React, { lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Cart from "./components/Cart.jsx";
import RestaurantPage from "./components/RestaurantPage.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const Grocery = lazy(() => import("./components/Grocery.jsx"))
const AppLayout = () => {

  const [userName, setUserName] = useState("abc")

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }} >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      }, {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />
      }, {
        path: "/cart",
        element: <Cart />
      }, {
        path: "/restaurants/:resId",
        element: <RestaurantPage />
      }, {
        path: "/grocery",
        element: <Grocery />
      },{
        path: "/cart",
        element:<Cart/>
      }],
    errorElement: <Error />
  },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

