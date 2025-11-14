import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
      const body = await request.json();
      const { system, prompt } = body;

      if (!system) {
        return new Response(JSON.stringify({ error: "System is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      if (!prompt) {
        return new Response(JSON.stringify({ error: "Prompt is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Check if RapidAPI key is configured
      if (!process.env.RAPIDAPI_KEY) {
        return new Response(JSON.stringify({ error: "API key not configured" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Call RapidAPI ChatGPT endpoint
      const options = {
        method: "POST",
        url: "https://chatgpt-42.p.rapidapi.com/gpt4",
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          messages: [
            {
              role: "system",
              content: system,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          web_access: false,
        },
      };
  
      const response = await axios.request(options);
      const aiResponse =
        response.data.result || response.data.content || response.data;
  
      // Simulate streaming by sending the response in chunks
      const stream = new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          const text =
            typeof aiResponse === "string"
              ? aiResponse
              : JSON.stringify(aiResponse);
  
          // Stream text word by word for smooth animation
          const words = text.split(" ");
  
          try {
            for (let i = 0; i < words.length; i++) {
              const chunk = i === words.length - 1 ? words[i] : words[i] + " ";
              controller.enqueue(encoder.encode(chunk));
  
              // Small delay between words for smooth streaming effect
              await new Promise((resolve) => setTimeout(resolve, 30));
            }
            controller.close();
          } catch (error) {
            controller.error(error);
          }
        },
      });
  
      return new Response(stream, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });

    } catch (error) {
      console.error("Text generation error:", error);
  
      return new Response(
        JSON.stringify({
          error:
            error instanceof Error ? error.message : "Failed to generate text",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
  