export type LoginResponse = {
  user: {
    id: string;
    name: string;
    email: string;
  };
};

export type RegisterResponse = {
  user: {
    id: string;
    name: string;
    email: string;
  };
};

export type GetUserResponse = {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
};
