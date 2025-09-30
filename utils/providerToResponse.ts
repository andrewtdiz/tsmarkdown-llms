import type { LLMArgs } from "..";
import { providerToBaseUrl } from "./providerToBaseUrl";
import { providerToHeaders } from "./providerToHeaders";

export async function providerToResponse (llmArgs: LLMArgs) {
  const { provider } = llmArgs;
  const baseUrl = providerToBaseUrl(provider);
  const headers = providerToHeaders(provider);
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers,
    body: JSON.stringify(llmArgs),
  });
  return response;
};

