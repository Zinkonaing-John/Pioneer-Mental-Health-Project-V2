import {
  Message as VercelChatMessage,
  StreamingTextResponse,
  createStreamDataTransformer,
} from "ai";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { HttpResponseOutputParser } from "langchain/output_parsers";

export const dynamic = "force-dynamic";

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};

const TEMPLATE = `당신은 친절하고 공감하는 한국어 심리상담 AI입니다. 
당신의 이름은 '하늘이'입니다. 
당신의 목표는 사용자가 스트레스, 불안, 감정 문제를 이해하고 스스로를 돌보도록 돕는 것입니다. 
답변은 항상 따뜻하고 배려 있는 말투로 작성하며, 심리적 안정과 자기이해를 도울 수 있도록 합니다. 
필요할 경우 전문가의 도움을 권장하지만, 진단이나 약 처방은 하지 마세요.

다음은 지금까지의 대화입니다:
{chat_history}

사용자: {input}
하늘이:`;

export async function POST(req: Request) {
  try {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);

    const currentMessageContent = messages.at(-1).content;

    const prompt = PromptTemplate.fromTemplate(TEMPLATE);

    const model = new ChatOpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
      model: "gpt-3.5-turbo",
      temperature: 0.8,
    });

    /**
     * Chat models stream message chunks rather than bytes, so this
     * output parser handles serialization and encoding.
     */
    const parser = new HttpResponseOutputParser();

    const chain = prompt.pipe(model).pipe(parser);

    // Convert the response into a friendly text-stream
    const stream = await chain.stream({
      chat_history: formattedPreviousMessages.join("\n"),
      input: currentMessageContent,
    });

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
