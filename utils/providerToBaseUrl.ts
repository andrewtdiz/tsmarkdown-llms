import { OAI_BASE_URL } from "../providers/OAI";
import { ANTHROPIC_BASE_URL } from "../providers/Anthropic";
import { CEREBAS_BASE_URL } from "../providers/Cerebras";
import type { LLMArgs } from "..";

export function providerToBaseUrl (provider: LLMArgs["provider"]) {
  switch (provider) {
    case "openai":
      return OAI_BASE_URL;
    case "anthropic":
      return ANTHROPIC_BASE_URL;
    case "cerebras":
      return CEREBAS_BASE_URL;
  }
};

