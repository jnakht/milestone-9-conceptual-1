import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";




export const authHook = () => {
   return useContext(AuthContext);
}