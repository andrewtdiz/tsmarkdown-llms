import type { LLMArgs } from "..";

export function providerToHeaders (provider: LLMArgs["provider"]) {
  return ({
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
  })
};

