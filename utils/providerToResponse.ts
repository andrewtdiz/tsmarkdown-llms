import type { LLMArgs } from "..";
import type {
  OpenAIMessageContent,
  OpenAITextContent,
} from "../providers/OAI";
import { providerToBaseUrl } from "./providerToBaseUrl";
import { providerToHeaders } from "./providerToHeaders";

function pruneUndefined(payload: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined),
  );
}

export async function providerToResponse(llmArgs: LLMArgs) {
  const { provider } = llmArgs;
  const baseUrl = providerToBaseUrl(provider);
  const headers = providerToHeaders(provider);

  if (provider === "anthropic") {
    const {
      model,
      messages,
      system,
      temperature,
      topP,
      stopSequences,
      maxOutputTokens,
      metadata,
    } = llmArgs;

    const body = pruneUndefined({
      model,
      messages,
      system,
      temperature,
      top_p: topP,
      stop_sequences: stopSequences,
      max_output_tokens: maxOutputTokens,
      metadata,
    });

    return fetch(`${baseUrl}/messages`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
  }

  if (provider === "openai") {
    const {
      model,
      messages,
      temperature,
      topP,
      maxTokens,
      frequencyPenalty,
      presencePenalty,
      stop,
      responseFormat,
      metadata,
    } = llmArgs;

    const input = messages.map(({ content, ...rest }) => ({
      ...rest,
      content: normalizeOpenAIContent(content),
    }));

    const body = pruneUndefined({
      model,
      input,
      temperature,
      top_p: topP,
      max_output_tokens: maxTokens,
      frequency_penalty: frequencyPenalty,
      presence_penalty: presencePenalty,
      stop,
      response_format: responseFormat,
      metadata,
    });

    return fetch(`${baseUrl}/responses`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
  }

  const {
    model,
    messages,
    temperature,
    topP,
    maxTokens,
    frequencyPenalty,
    presencePenalty,
    stop,
    responseFormat,
    metadata,
  } = llmArgs;

  const body = pruneUndefined({
    model,
    messages,
    temperature,
    top_p: topP,
    max_tokens: maxTokens,
    frequency_penalty: frequencyPenalty,
    presence_penalty: presencePenalty,
    stop,
    response_format: responseFormat,
    metadata,
  });

  return fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
}

function normalizeOpenAIContent(
  content: OpenAIMessageContent,
): OpenAITextContent[] {
  const contentArray: OpenAITextContent[] = Array.isArray(content)
    ? content
    : typeof content === "string"
      ? [{ type: "input_text", text: content }]
      : [content];

  return contentArray.map(({ type, text }) => ({ type, text }));
}

