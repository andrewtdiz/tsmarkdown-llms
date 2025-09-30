const CEREBAS_MODELS = [

] as const;

export type CerebrasModel = (typeof CEREBAS_MODELS)[number];

export interface CerebrasArgs {
  provider: "cerebras";
  model: CerebrasModel;
  temperature: number;
  prompt: string;
}

export const CEREBAS_BASE_URL = "https://api.cerebras.ai/v1";