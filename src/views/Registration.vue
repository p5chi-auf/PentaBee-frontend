<template>
	<div class="login-registration-background">
		<b-container class="col-md-9">
			<b-row align-h="center" class="mt-5">
				<b-card class="p-3">
					<h4 class="text-center">
						Create an PentaBee account
						<hr/>
					</h4>

					<b-form @submit.prevent="handleSubmit" class="row">
						<b-form-group id="input-group-1" class="col-md-6" label="Username:" label-for="username">
							<b-form-input
								id="username"
								name="username"
								v-model="user.username"
								type="text"
								class="form-control"
								:class="{'is-invalid': submitted && errors.has('username')}"
								v-validate="'alpha_dash|required|min:5|max:20'"
							></b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('username')">
                {{ errors.first("username") }}
              </span>
						</b-form-group>

						<b-form-group id="input-group-2" class="col-md-6" label="First Name:" label-for="firstName">
							<b-form-input
								id="firstName"
								name="name"
								v-model="user.name"
								type="text"
								class="form-control"
								:class="{'is-invalid': submitted && errors.has('name')}"
								v-validate="'required|min:3|max:20'"
							></b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('name')">
                {{ errors.first("name") }}
              </span>
						</b-form-group>

						<b-form-group id="input-group-3" class="col-md-6"  label="Email:" label-for="email">
							<b-form-input
								id="email"
								name="email"
								v-model="user.email"
								type="email"
								class="form-control"
								:class="{ 'is-invalid': submitted && errors.has('email') }"
								v-validate="'required|email'"
							></b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('email')">
                {{ errors.first("email") }}
              </span>
						</b-form-group>

						<b-form-group id="input-group-4" class="col-md-6"  label="Last Name:" label-for="lastName">
							<b-form-input
								id="lastName"
								name="surname"
								v-model="user.surname"
								type="text"
								class="form-control"
								:class="{ 'is-invalid': submitted && errors.has('surname') }"
								v-validate="'required|min:3|max:20'"
							></b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('surname')">
                {{ errors.first("surname") }}
              </span>
						</b-form-group>

						<b-form-group id="input-group-5" class="col-md-6" label="Password:" label-for="password">
							<b-form-input
								id="password"
								name="password"
								v-model="user.password"
								type="password"
								ref="password"
								class="form-control"
								:class="{ 'is-invalid': submitted && errors.has('password') }"
								v-validate="{
                  required: true,
                  regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,16})/
                }"></b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('password')">
              {{ "The password should contain Minimum 8 and Maximum 12 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character."}}
							</span>
						</b-form-group>

						<b-form-group id="input-group-6" class="col-md-6" label="Confirm Password:" label-for="confirmPassword">
							<b-form-input
								id="confirmPassword"
								name="confirm_password"
								v-model="user.confirm_password"
								type="password"
								class="form-control"
								data-vv-as="password"
								:class="{'is-invalid': submitted && errors.has('confirm_password')}"
								v-validate="'required|confirmed:password'"></b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('confirm_password')">
                {{ errors.first("confirm_password") }}
              </span>
						</b-form-group>
					</b-form>

					<div class="text-center space">
						<b-btn
							@click="handleSubmit"
							class="col-md-5 float-none d-inline-block"
							type="submit"
							variant="outline-warning"
							block
							pill
						>
							Create your account
						</b-btn>
					</div>

					<p class="text-center">
						Already have a
						<b-link class="link-redirect" to="/">PentaBee</b-link>
						account?

						<b-link class="link-redirect" to="/login">Log in</b-link>
					</p>
				</b-card>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        name: "",
        surname: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          alert("User successfully created!\n\n" + JSON.stringify(this.user));
        }
      });
    }
  }
};
</script>
