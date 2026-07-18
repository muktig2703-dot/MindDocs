import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [sessions, setSessions] = useState([]);

  const [currentSessionId, setCurrentSessionId] =
    useState(null);

  // Current session

  const currentSession =
    sessions.find(
      (session) =>
        session.id === currentSessionId
    ) ?? null;

  // Create a new chat

  const createSession = (
    filename = "Unknown Document"
  ) => {
  const session = {
  id: crypto.randomUUID(),

  filename,

  title: "New Conversation",

  createdAt: new Date().toISOString(),

  messages: [
    {
      role: "assistant",
      text: `Hello!

Upload a document and ask me anything.

I'll answer using only the contents of your uploaded PDFs.`,
    },
  ],
};

    setSessions((prev) => [
      session,
      ...prev,
    ]);

    setCurrentSessionId(session.id);

    return session.id;
  };

  // Append one message

  const appendMessage = (
    sessionId,
    message
  ) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              messages: [
                ...session.messages,
                message,
              ],
            }
          : session
      )
    );
  };

  const updateSession = (sessionId, updates) => {
  setSessions((prev) =>
    prev.map((session) =>
      session.id === sessionId
        ? {
            ...session,
            ...updates,
          }
        : session
    )
  );
};

const selectSession = (sessionId) => {
  setCurrentSessionId(sessionId);
};



  // Delete session

  const deleteSession = (id) => {
    setSessions((prev) =>
      prev.filter(
        (session) => session.id !== id
      )
    );

    if (currentSessionId === id) {
      setCurrentSessionId(null);
    }
  };

  // Clear everything

  const clearSessions = () => {
    setSessions([]);
    setCurrentSessionId(null);
  };

  const value = useMemo(
    () => ({
      sessions,

      currentSession,

      currentSessionId,

      createSession,

      appendMessage,
updateSession,
selectSession,
deleteSession,
clearSessions,
    }),
    [
      sessions,
      currentSession,
      currentSessionId,
    ]
  );

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}
export function useChat() {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error(
      "useChat must be used within ChatProvider."
    );
  }

  return context;
}