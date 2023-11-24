import { z } from "zod";

export const FormSchema = z.object({
    date_of_public: z.string(),
    title: z.string(),
    description: z.string(),
  });