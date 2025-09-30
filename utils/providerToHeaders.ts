import type { LLMArgs } from "..";

const PROVIDER_TO_ENV: Record<LLMArgs["provider"], string> = {
  openai: "OPENAI_API_KEY",
  anthropic: "ANTHROPIC_API_KEY",
  cerebras: "CEREBRAS_API_KEY",
  groq: "GROQ_API_KEY",
  grok: "XAI_API_KEY",
};

const ANTHROPIC_VERSION = "2023-06-01";

export function providerToHeaders(
  provider: LLMArgs["provider"],
): Record<string, string> {
  const envVar = PROVIDER_TO_ENV[provider];
  const apiKey = process.env[envVar];

  if (!apiKey) {
    throw new Error(`${envVar} is not set`);
  }

  if (provider === "anthropic") {
    return {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": ANTHROPIC_VERSION,
    };
  }

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
}

