'use client'
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { collection, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export default function Chat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const chatRef = collection(db, 'chat');
    const unsubscribe = onSnapshot(chatRef, snapshot => {
      const messageList = snapshot.docs.map(doc => doc.data())
      setMessages(messageList)
    })

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    const chatRef = collection(db, 'chat')
    await addDoc(chatRef, {
      text: newMessage,
      userId: user.uid,
      timestamp: serverTimestamp(),
    });

    setNewMessage('')
  }

  return (
    <>
        {!user ? (
            <div className="text-center">You must be logged in</div>
        ) : (
            <div className="flex flex-col">
                <div className="flex-1 overflow-y-auto px-4 py-6">
                    {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`p-2 rounded-lg mb-2 w-[1000px] ${
                        message.userId === user.uid
                            ? 'bg-blue-500 text-white self-end'
                            : 'bg-gray-200 text-gray-700 self-start'
                        }`}
                    >
                        {message.text}
                    </div>
                    ))}
                </div>
                <div className="p-4 border-t w-[1000px]">
                    <div className="flex">
                    <textarea
                        className="flex-1 border rounded-lg p-2 mr-2 resize-none"
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}
