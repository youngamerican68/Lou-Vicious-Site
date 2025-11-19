import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrutalButton, BrutalCard } from './BrutalComponents';
import { streamViciousChat } from '../services/gemini';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: 'SYSTEM_READY. ASK ME ANYTHING, IF YOU DARE.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    let fullResponse = "";
    // Add placeholder for streaming
    setMessages(prev => [...prev, { role: 'ai', content: '' }]);

    const stream = streamViciousChat(userMessage);
    
    for await (const chunk of stream) {
      fullResponse += chunk;
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].content = fullResponse;
        return newMessages;
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
       >
        <BrutalCard title="THE ORACLE" color="bg-neo-purple" className="h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono bg-neo-black border-4 border-white mb-4 custom-scroll">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 border-2 border-transparent ${
                            msg.role === 'user' 
                            ? 'bg-neo-lime text-neo-black border-b-4 border-r-4 border-white' 
                            : 'bg-neo-black text-neo-cyan border-l-2 border-neo-cyan'
                        }`}>
                            <span className="block text-xs opacity-50 mb-1 uppercase tracking-widest">
                                {msg.role === 'user' ? 'YOU' : 'LOU_OS'}
                            </span>
                            <div className="whitespace-pre-wrap font-bold leading-relaxed">
                                {msg.content}
                            </div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="text-neo-pink animate-pulse font-mono">
                        {'>'} PROCESSING THOUGHTS...
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="TYPE COMMAND..."
                    className="flex-1 bg-white border-4 border-neo-black p-4 font-mono font-bold focus:outline-none focus:ring-4 focus:ring-neo-pink placeholder:text-gray-400 text-neo-black uppercase"
                />
                <BrutalButton variant="primary" disabled={isLoading} className="shrink-0">
                    SEND
                </BrutalButton>
            </form>
        </BrutalCard>
       </motion.div>
    </div>
  );
};