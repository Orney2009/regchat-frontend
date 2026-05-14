import { API_CONFIG, CHAT_CONFIG } from "../config/env";
import { fetchWithAuth } from "./apiClient";

export const sendChatMessage = async (question, conversationId = null) => {
  const payload = {
    question,
    country: CHAT_CONFIG.country,
    domain: CHAT_CONFIG.domain,
    threshold: CHAT_CONFIG.threshold,
    top_k: CHAT_CONFIG.top_k,
  };

  if (conversationId) {
    payload.conversation_id = conversationId;
  }

  try {
    const response = await fetchWithAuth(`${API_CONFIG.baseUrl}/chat/`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Chat API error:", error);
    throw error;
  }
};
