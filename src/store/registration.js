import VeeValidate from "vee-validate";
import Vue from "vue";
Vue.use(VeeValidate);

VeeValidate.Validator.extend("verifyPassword", {
  // eslint-disable-next-line no-unused-vars
  getMessage: field =>
    `The password should contain Minimum 6 and Maximum 12 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character.`,
  validate: value => {
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,16})"
    );
    return strongRegex.test(value);
  }
});
