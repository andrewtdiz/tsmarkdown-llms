import type {
  OpenAIChatMessage,
  OpenAICompatibleChatArgsBase,
} from "./OAI";

export const GROQ_MODELS = [
  "llama3-8b-8192",
  "llama3-70b-8192",
  "mixtral-8x7b-32768",
  "gemma-7b-it",
  "gemma2-9b-it",
  "llama-guard-7b",
  "whisper-large-v3",
  "distil-whisper-large-v3",
] as const;

export type GroqModel = (typeof GROQ_MODELS)[number];

export interface GroqArgs extends OpenAICompatibleChatArgsBase {
  provider: "groq";
  model: GroqModel;
  messages: OpenAIChatMessage[];
}

export const GROQ_BASE_URL = "https://api.groq.com/openai/v1";
