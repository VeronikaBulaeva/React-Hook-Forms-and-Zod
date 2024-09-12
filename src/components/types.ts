export interface InputType {
  name: string;
  disabled: boolean;
  placeholder?: string;
  required?: boolean;
  label?: string;
  text?: string;
}

export interface OptionsInputType extends InputType {
  options: readonly string[];
}
