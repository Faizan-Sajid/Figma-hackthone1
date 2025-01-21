"use client"
import { Provider } from "react-redux";
import Store from "./redux/store";

function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <Provider store={Store}>
        {children}
        </Provider>

    )
}
export default Providers