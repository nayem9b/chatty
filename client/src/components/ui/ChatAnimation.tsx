'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'other';
  delay: number;
}

const messages: Message[] = [
  { id: 1, text: "Hey! How's it going?", sender: 'other', delay: 1000 },
  { id: 2, text: "Loving the smooth chat experience!", sender: 'user', delay: 3000 },
  { id: 3, text: "Looks super sleek and modern!", sender: 'other', delay: 6000 },
  { id: 4, text: "Exactly! Totally next-gen design!", sender: 'user', delay: 9000 },
  { id: 5, text: "Want to start chatting for real?", sender: 'other', delay: 12000 },
];

export const ChatAnimation = () => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    messages.forEach((message) => {
      const timeout = setTimeout(() => {
        if (message.sender === 'other') {
          setIsTyping(true);
          const typingTimeout = setTimeout(() => {
            setIsTyping(false);
            setVisibleMessages((prev) => [...prev, message]);
          }, 1500);
          timeouts.push(typingTimeout);
        } else {
          setVisibleMessages((prev) => [...prev, message]);
        }
      }, message.delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleMessages, isTyping]);

  const handleInputFocus = () => {
    router.push('/signup');
  };

  return (
    <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl backdrop-blur-lg overflow-hidden flex flex-col border border-white/10">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center space-x-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 flex items-center justify-center text-white text-lg font-semibold shadow-md">
          A
        </div>
        <div>
          <h3 className="font-semibold text-white">Alex</h3>
          <p className="text-xs text-gray-400">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 custom-scroll"
      >
        <AnimatePresence>
          {visibleMessages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none shadow-md'
                    : 'bg-gray-700 text-gray-100 rounded-bl-none shadow-sm'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-1 p-2 w-16 bg-gray-700 rounded-full mx-2"
            >
              <div
                className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                style={{ animationDelay: '0ms' }}
              />
              <div
                className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                style={{ animationDelay: '150ms' }}
              />
              <div
                className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                style={{ animationDelay: '300ms' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10 bg-gray-800/60 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 transition"
            onFocus={handleInputFocus}
          />
          <button className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Custom scrollbar style */}
      <style jsx>{`
        .custom-scroll {
          scrollbar-width: none; /* Firefox */
        }
        .custom-scroll::-webkit-scrollbar {
          width: 0px;
          height: 0px;
        }
      `}</style>
    </div>
  );
};
