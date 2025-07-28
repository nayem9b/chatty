import { useState, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'other';
  delay: number;
}

const messages: Message[] = [
  { id: 1, text: "Hey! How's it going? 👋", sender: 'other', delay: 1000 },
  { id: 2, text: "Great! Just checking out this amazing chat app ✨", sender: 'user', delay: 2500 },
  { id: 3, text: "The animations are so smooth! 🚀", sender: 'other', delay: 4000 },
  { id: 4, text: "I know right? Super modern design 💜", sender: 'user', delay: 5500 },
  { id: 5, text: "Let's start chatting here! 💬", sender: 'other', delay: 7000 },
];

export const ChatAnimation = () => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    messages.forEach((message) => {
      setTimeout(() => {
        if (message.sender === 'other') {
          setShowTyping(true);
          setTimeout(() => {
            setShowTyping(false);
            setVisibleMessages(prev => [...prev, message]);
          }, 1000);
        } else {
          setVisibleMessages(prev => [...prev, message]);
        }
      }, message.delay);
    });

    // Reset animation after completion
    const resetTimer = setTimeout(() => {
      setVisibleMessages([]);
      setShowTyping(false);
    }, 10000);

    return () => clearTimeout(resetTimer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-card/50 backdrop-blur-xl rounded-3xl p-6 shadow-card">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
          💬
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Chat Demo</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Online
          </p>
        </div>
      </div>
      
      <div className="space-y-4 h-80 overflow-hidden">
        {visibleMessages.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble ${
              message.sender === 'user' ? 'chat-bubble-sent' : 'chat-bubble-received'
            }`}
          >
            {message.text}
          </div>
        ))}
        
        {showTyping && (
          <div className="chat-bubble chat-bubble-received">
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};