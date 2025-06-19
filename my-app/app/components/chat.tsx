"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { useRef, useEffect } from "react";

// Ensure the package 'ai' is installed: npm install ai

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/ex3",
    onError: (e: Error) => {
      console.log(e);
    },
  });
  const chatParent = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });

  return (
    <main className="flex flex-col w-full h-screen max-h-dvh bg-white">
      <header className="p-4 border-b w-full max-w-3xl mx-auto bg-black">
        <h1 className="text-2xl font-bold">Bloom AI Assistance</h1>
      </header>

      <section className="p-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-3xl mx-auto items-center"
        >
          <Input
            className="flex-1 min-h-[40px] text-black"
            placeholder="Type your question here..."
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <Button className="ml-2 text-black" type="submit">
            Submit
          </Button>
        </form>
      </section>

      <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
        <ul
          ref={chatParent}
          className="h-1 p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4"
        >
          {messages.map(
            (
              m: { role: string; id: string; content: string },
              index: number
            ) => (
              <div key={index}>
                {m.role === "user" ? (
                  <li key={m.id} className="flex flex-row">
                    <div className=" rounded-xl p-4 bg-gray-300 shadow-md flex ">
                      <p className="text-black">{m.content}</p>
                    </div>
                  </li>
                ) : (
                  <li key={m.id} className="flex flex-row-reverse">
                    <div className=" p-4  flex w-3/4">
                      <p className="text-black">{m.content}</p>
                    </div>
                  </li>
                )}
              </div>
            )
          )}
        </ul>
      </section>
    </main>
  );
}
