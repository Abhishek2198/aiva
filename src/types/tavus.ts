export interface TavusPersona {
  persona_id: string;
  persona_name: string;
  system_prompt: string;
  layers: {
    llm: {
      model: string;
      speculative_inference: boolean;
    };
    tts: {
      tts_engine: string;
      tts_model_name: string;
      external_voice_id: string;
      api_key: string;
    };
    perception: {
      perception_model: string;
      ambient_awareness_queries: string[];
    };
  };
  default_replica_id: string;
}

export interface TavusConversation {
  conversation_id: string;
  conversation_name: string;
  replica_id: string;
  persona_id: string;
  conversational_context: string;
  properties: {
    language: string;
    enable_closed_captions: boolean;
    apply_greenscreen: boolean;
  };
  status: 'active' | 'inactive' | 'ended';
  conversation_url?: string;
  video_url?: string;
}

export interface CallState {
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
  conversation: TavusConversation | null;
  isMuted: boolean;
  isVideoEnabled: boolean;
}