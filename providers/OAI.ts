const OAI_MODELS = [
    "gpt-4o",
] as const;

export type OAIModel = (typeof OAI_MODELS)[number];

export interface OAIArgs {
  provider: "openai";
  model: OAIModel;
  temperature: number;
  prompt: string;
}

export const OAI_BASE_URL = "https://api.openai.com/v1";