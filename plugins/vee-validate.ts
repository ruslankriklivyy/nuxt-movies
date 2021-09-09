import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", (value: string) => {
  if (
    value.match(
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm
    )
  ) {
    return true;
  }

  return "E-mail must be correct";
});

extend("password", (value: string) => {
  if (value.match(/^[A-Za-z]\w{7,14}$/)) {
    return true;
  }

  return "Password must be correct";
});
