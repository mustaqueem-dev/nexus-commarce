import "server-only"
import { z } from "zod";

const serverEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_API_KEY: z.string(),
});

export const serverEnv = serverEnvSchema.parse(process.env);