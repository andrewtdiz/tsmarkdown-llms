import type { OAIArgs } from "./providers/OAI";
import type { AnthropicArgs } from "./providers/Anthropic";
import type { CerebrasArgs } from "./providers/Cerebras";
import type { GroqArgs } from "./providers/Groq";
import type { GrokArgs } from "./providers/Grok";
import { providerToBaseUrl } from "./utils/providerToBaseUrl";
import { providerToResponse } from "./utils/providerToResponse";

export type LLMArgs =
  | OAIArgs
  | AnthropicArgs
  | CerebrasArgs
  | GroqArgs
  | GrokArgs;

export async function promptLLM(args: LLMArgs) {
  return providerToResponse(args);
}
