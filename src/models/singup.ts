export interface ISignUpParams {
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IGenderParams {
  label: string;
  value: string;
}

export interface ILocationParams {
  id: string | number;
  name: string;
  pid: number | null;
}

export interface ISignUpValidation {
  email: string;
  password: string;
  repeatPassword: string;
}
