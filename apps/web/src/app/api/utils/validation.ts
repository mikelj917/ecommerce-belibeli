import z from "zod";
import { BadRequestError } from "../HttpErrors";

type Validation<T> = {
  data: unknown;
  schema: z.ZodType<T>;
};

export const validation = <T>({ data, schema }: Validation<T>) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const tree = z.treeifyError(result.error);
    const details = "properties" in tree ? tree.properties : tree;

    throw new BadRequestError(details);
  }

  return result.data;
};
