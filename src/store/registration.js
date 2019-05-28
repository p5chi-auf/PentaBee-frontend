import VeeValidate from "vee-validate";
import Vue from "vue";
Vue.use(VeeValidate);

VeeValidate.Validator.extend("verify_password", {
  // eslint-disable-next-line no-unused-vars
  getMessage: field => `Password should be more complex`,
  validate: value => {
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,16})"
    );
    return strongRegex.test(value);
  }
});
