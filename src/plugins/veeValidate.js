import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

VeeValidate.Validator.extend("verify_password", {
  getMessage: field => `The password should contain Minimum 8, at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character.`,
  validate: value => {
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,16})"
    );
    return strongRegex.test(value);
  }
});
