export class RegisterUserRequest {
  username: string;
  password: string;
  name: string;
}

export class UserResponse {
  username: string | null;
  name: string | null;
  token?: string | null;
}

export class LoginUserRequest {
  username: string;
  password: string;
}

export class UpdateUserRequest {
  name?: string;
  password?: string;
}