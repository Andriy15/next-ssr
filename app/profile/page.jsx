'use client'
import React from 'react'
import { useAuth } from "../context/AuthContext";

export default function Profile() {
    const { user } = useAuth()

    return (
        <div>
            {!user ? (
                <p>You must be logged in</p>
            ) : (
                <div>
                    <p>Welcome back {user.displayName}</p>
                </div>
            )}
        </div>
    )
}