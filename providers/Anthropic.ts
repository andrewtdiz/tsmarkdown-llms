const ANTHROPIC_MODELS = [

] as const;

export type AnthropicModel = (typeof ANTHROPIC_MODELS)[number];

export interface AnthropicArgs {
  provider: "anthropic";
  model: AnthropicModel;    
  temperature: number;
  prompt: string;
}

export const ANTHROPIC_BASE_URL = "https://api.anthropic.com/v1";