'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Settings, Send } from 'lucide-react';

// Logo path
const logo = '/logo.png';

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  date: string;
  avatar: string;
  unread?: boolean;
}

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'other';
  time: string;
}

/**
 * Page Messages Next.js
 */
export default function MessagesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');

  const conversations: Conversation[] = [
    {
      id: '1',
      name: 'Michael Jeromes',
      lastMessage: 'Merci pour votre réponse...',
      date: '13/01/2025',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      unread: true
    },
    {
      id: '2',
      name: 'Sophie Martin',
      lastMessage: 'La réservation est confirmée',
      date: '12/01/2025',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: '3',
      name: 'Pierre Dupont',
      lastMessage: 'À quelle heure arrivez-vous ?',
      date: '11/01/2025',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    }
  ];

  const messages: Message[] = [
    { id: '1', text: 'Bonjour ! Je suis intéressé par votre logement.', sender: 'other', time: '10:30' },
    { id: '2', text: 'Bonjour ! Bien sûr, il est disponible aux dates que vous avez indiquées.', sender: 'me', time: '10:35' },
    { id: '3', text: 'Parfait ! Je vais réserver tout de suite.', sender: 'other', time: '10:40' },
  ];

  const filteredConversations = activeTab === 'unread' 
    ? conversations.filter(c => c.unread)
    : conversations;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img 
            src={logo} 
            alt="HOMIQIO" 
            className="h-8 cursor-pointer" 
            onClick={() => router.push('/')}
          />
          <h1 className="text-lg font-semibold">Messages</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <div className="w-80 border-r flex flex-col">
          {/* Tabs */}
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab('all')}
              className={`flex-1 py-3 text-sm font-medium ${activeTab === 'all' ? 'border-b-2 border-black' : 'text-gray-500'}`}
            >
              Tous
            </button>
            <button 
              onClick={() => setActiveTab('unread')}
              className={`flex-1 py-3 text-sm font-medium ${activeTab === 'unread' ? 'border-b-2 border-black' : 'text-gray-500'}`}
            >
              Non lus
            </button>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <div 
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`p-4 flex gap-3 cursor-pointer hover:bg-gray-50 ${selectedConversation === conv.id ? 'bg-gray-100' : ''}`}
              >
                <img src={conv.avatar} alt={conv.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <span className={`font-medium ${conv.unread ? 'text-black' : 'text-gray-700'}`}>{conv.name}</span>
                    <span className="text-xs text-gray-500">{conv.date}</span>
                  </div>
                  <p className={`text-sm truncate ${conv.unread ? 'text-black font-medium' : 'text-gray-500'}`}>
                    {conv.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-md px-4 py-2 rounded-2xl ${msg.sender === 'me' ? 'bg-[#00A99D] text-white' : 'bg-gray-100'}`}>
                      <p>{msg.text}</p>
                      <span className={`text-xs ${msg.sender === 'me' ? 'text-white/70' : 'text-gray-500'}`}>{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Input */}
              <div className="border-t p-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Écrivez un message..."
                    className="flex-1 px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#00A99D]"
                  />
                  <button className="p-3 bg-[#00A99D] text-white rounded-full hover:bg-[#008B82]">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Sélectionnez une conversation
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

