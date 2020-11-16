import say from "say";
import { promisify } from "util";

const voice = process.env.VOICE || "Daniel";

interface SpeakAsync {
  (text: string, voice?: string, speed?: number): Promise<void>;
}

const speakAsync: SpeakAsync = promisify(say.speak.bind(say));

export const speak = async (text: string) => {
  return await speakAsync(text, voice);
};
