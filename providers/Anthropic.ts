export const ANTHROPIC_MODELS = [
  "claude-3-5-sonnet-20241022",
  "claude-3-5-haiku-20241022",
  "claude-3-opus-20240229",
  "claude-3-sonnet-20240229",
  "claude-3-haiku-20240307",
] as const;

export type AnthropicModel = (typeof ANTHROPIC_MODELS)[number];

export type AnthropicRole = "user" | "assistant";

export interface AnthropicTextBlock {
  type: "text";
  text: string;
}

export interface AnthropicMessage {
  role: AnthropicRole;
  content: AnthropicTextBlock[];
}

export interface AnthropicArgs {
  provider: "anthropic";
  model: AnthropicModel;
  messages: AnthropicMessage[];
  system?: string;
  temperature?: number;
  topP?: number;
  stopSequences?: string[];
  maxOutputTokens: number;
  metadata?: Record<string, string>;
}

export const ANTHROPIC_BASE_URL = "https://api.anthropic.com/v1";
