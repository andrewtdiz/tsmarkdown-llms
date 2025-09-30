import type {
  OpenAIChatMessage,
  OpenAICompatibleChatArgsBase,
} from "./OAI";

export const GROK_MODELS = [
  "grok-1",
  "grok-1.5",
  "grok-1.5-mini",
  "grok-2",
  "grok-2-mini",
] as const;

export type GrokModel = (typeof GROK_MODELS)[number];

export interface GrokArgs extends OpenAICompatibleChatArgsBase {
  provider: "grok";
  model: GrokModel;
  messages: OpenAIChatMessage[];
}

export const GROK_BASE_URL = "https://api.x.ai/v1";
