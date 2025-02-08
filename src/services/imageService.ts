
import { RunwareService, GenerateImageParams } from '@/lib/runware';

const runwareService = new RunwareService(process.env.RUNWARE_API_KEY || '');

export const generatePhaseImage = async (phase: string, description: string) => {
  const params: GenerateImageParams = {
    positivePrompt: `Professional high quality digital art of ${description}, trending on artstation, modern sleek design, futuristic tech aesthetic`,
    model: "runware:100@1",
    numberResults: 1,
    outputFormat: "WEBP",
    CFGScale: 7,
    scheduler: "FlowMatchEulerDiscreteScheduler",
    strength: 0.8,
  };

  try {
    const result = await runwareService.generateImage(params);
    return result.imageURL;
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
};
