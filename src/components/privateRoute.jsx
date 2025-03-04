"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const PrivateRoute = ({ children }) => {
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.isLogin);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated, router])

    return isAuthenticated ? children : null;
}
export default PrivateRoute;