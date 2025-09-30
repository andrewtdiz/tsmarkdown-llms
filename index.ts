import type { OAIArgs } from "./providers/OAI";
import type { AnthropicArgs } from "./providers/Anthropic";
import type { CerebrasArgs } from "./providers/Cerebras";
import { providerToBaseUrl } from "./utils/providerToBaseUrl";
import { providerToResponse } from "./utils/providerToResponse";

export type LLMArgs = OAIArgs | AnthropicArgs | CerebrasArgs;

export async function promptLLM(args: LLMArgs) {
  const { prompt, model, temperature, provider } = args;
  const responsePromise = await providerToResponse(args);
  return responsePromise;
}