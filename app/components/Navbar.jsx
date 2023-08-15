'use client'
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const {user, signInWithGoogle, logOut} = useAuth()

    const handleLogin = () => {
        signInWithGoogle()
    } 

    const handleLogout = async () => {
        logOut()
    }


    return (
        <div className="h-20 w-full border b-2 flex items-center justify-between p-2">
            <ul className="flex">
                <li className="p-2 cursor-pointer">
                    <Link href="/">Home</Link>
                </li>
                <li className="p-2 cursor-pointer">
                    <Link href="/about">About</Link>
                </li>
                <li className="p-2 cursor-pointer">
                    <Link href="/profile">Profile</Link>
                </li>
            </ul>
            {!user ? (
                <ul className="flex">
                <li className="p-2 cursor-pointer" onClick={handleLogin}>
                    Login
                </li>
                <li className="p-2 cursor-pointer" onClick={handleLogout}>
                    Log Out
                </li>
            </ul>
            ) : (
            <ul className="flex">
                <li className="p-2 cursor-pointer">
                        <div className="rounded-full w-10 h-10 overflow-hidden">
                            <img
                                src={user.photoURL}
                                alt={`${user.displayName}'s profile`}
                            />
                        </div>
                    </li>
                <li className="p-2 cursor-pointer">
                    {user.displayName}
                </li>
                <li className="p-2 cursor-pointer" onClick={handleLogout}>
                    Log Out
                </li>
            </ul>
            )}
            
        </div>
    )
}