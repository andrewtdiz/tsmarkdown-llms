export const OAI_MODELS = [
  "gpt-4.1",
  "gpt-4.1-mini",
  "o4-mini",
  "o3-mini",
  "gpt-4o",
  "gpt-4o-mini",
] as const;

export type OAIModel = (typeof OAI_MODELS)[number];

export type OpenAIChatRole = "system" | "user" | "assistant" | "tool";

export interface OpenAITextContent {
  type: "input_text";
  text: string;
}

export type OpenAIMessageContent =
  | string
  | OpenAITextContent
  | OpenAITextContent[];

export interface OpenAIChatMessage {
  role: OpenAIChatRole;
  content: OpenAIMessageContent;
  name?: string;
}

export interface OpenAIResponseFormatJSONSchema {
  type: "json_schema";
  json_schema: {
    name: string;
    schema: unknown;
    strict?: boolean;
  };
}

export type OpenAIResponseFormat =
  | { type: "text" }
  | OpenAIResponseFormatJSONSchema;

export interface OpenAICompatibleChatArgsBase {
  messages: OpenAIChatMessage[];
  temperature?: number;
  topP?: number;
  maxTokens?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  stop?: string | string[];
  responseFormat?: OpenAIResponseFormat;
  metadata?: Record<string, unknown>;
}

export interface OAIArgs extends OpenAICompatibleChatArgsBase {
  provider: "openai";
  model: OAIModel;
}

export const OAI_BASE_URL = "https://api.openai.com/v1";
