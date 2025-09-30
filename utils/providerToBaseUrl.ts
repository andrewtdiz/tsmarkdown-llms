import { OAI_BASE_URL } from "../providers/OAI";
import { ANTHROPIC_BASE_URL } from "../providers/Anthropic";
import { CEREBRAS_BASE_URL } from "../providers/Cerebras";
import { GROQ_BASE_URL } from "../providers/Groq";
import { GROK_BASE_URL } from "../providers/Grok";
import type { LLMArgs } from "..";

export function providerToBaseUrl(provider: LLMArgs["provider"]) {
  switch (provider) {
    case "openai":
      return OAI_BASE_URL;
    case "anthropic":
      return ANTHROPIC_BASE_URL;
    case "cerebras":
      return CEREBRAS_BASE_URL;
    case "groq":
      return GROQ_BASE_URL;
    case "grok":
      return GROK_BASE_URL;
  }
}

