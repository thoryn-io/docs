// components/LeadChat.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function LeadsChat() {
    const [messages, setMessages] = useState<{ from: "me" | "agent"; text: string }[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        (async () => {
            const es = new EventSource(`/api/chat/stream`);
            es.onmessage = (e) => {
                const payload = JSON.parse(e.data);
                setMessages((m) => [...m, { from: "agent", text: payload.text }]);
            };
            es.onerror = () => es.close();
        })();
    }, []);

    const send = async () => {
        const text = inputRef.current?.value?.trim();
        if (!text) return;
        setMessages((m) => [...m, { from: "me", text }]);
        inputRef.current!.value = "";
        await fetch("/api/chat/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
    };

    return (
        <div className="h-full mb-14 ml-2 mr-2">
            <div className="h-full overflow-y-auto space-y-2 text-sm">
                {messages.map((m, i) => (
                    <div key={i} className={m.from === "me" ? "text-right" : ""}>
            <span className={`inline-block px-3 py-2 rounded-xl ${m.from === "me" ? "bg-gray-200" : "bg-purple-100"}`}>
              {m.text}
            </span>
                    </div>
                ))}
            </div>
            <div className="mt-2 flex gap-2">
                <input ref={inputRef} className="flex-1 border rounded-lg px-2 py-1" placeholder="Type a message…" />
                <button onClick={send} className="px-3 py-1 rounded-lg bg-purple-600 text-white">Send</button>
            </div>
        </div>
    );
}