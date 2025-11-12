type HandleResponse = {
  message: string;
  details: unknown;
  status: number;
};

export const handleResponse = ({ details, message, status }: HandleResponse) => {
  return Response.json({ message, details }, { status });
};
