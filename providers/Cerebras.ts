import type {
  OpenAIChatMessage,
  OpenAICompatibleChatArgsBase,
} from "./OAI";

export const CEREBRAS_MODELS = [
  "llama3.1-8b",
  "llama3.1-70b",
  "llama3.1-405b",
  "llama3-8b",
  "llama3-70b",
  "llama2-7b",
  "llama2-13b",
  "llama2-70b",
  "mixtral-8x7b",
  "mistral-7b",
  "phi-2",
  "phi-3-mini-4k-instruct",
  "phi-3-small-8k-instruct",
] as const;

export type CerebrasModel = (typeof CEREBRAS_MODELS)[number];

export interface CerebrasArgs extends OpenAICompatibleChatArgsBase {
  provider: "cerebras";
  model: CerebrasModel;
  messages: OpenAIChatMessage[];
}

export const CEREBRAS_BASE_URL = "https://api.cerebras.ai/v1";
