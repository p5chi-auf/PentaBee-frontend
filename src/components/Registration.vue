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
						<b-form-group class="col-md-6" id="input-group-1" label-for="input-1">
							<label class="ml-2 text-form" for="username">Username</label>

							<b-form-input
								:class="{'is-invalid': submitted && errors.has('username')}"
								class="form-control"
								id="username"
								name="username"
								type="text"
								v-model="user.username"
								v-validate="'alpha_dash|required|min:5|max:20'">
							</b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('username')">
                {{ errors.first("username") }}
              </span>
						</b-form-group>

						<b-form-group class="col-md-6" id="input-group-2" label-for="input-2">
							<label class="ml-2 text-form" for="firstName">First Name</label>

							<b-form-input
								:class="{'is-invalid': submitted && errors.has('name')}"
								class="form-control"
								id="firstName"
								name="name"
								type="text"
								v-model="user.name"
								v-validate="'required|min:3|max:20'">
							</b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('name')">
                {{ errors.first("name") }}
              </span>
						</b-form-group>


						<b-form-group class="col-md-6" id="input-group-4" label-for="input-4">
							<label class="ml-2 text-form" for="email">Email</label>

							<b-form-input
								:class="{ 'is-invalid': submitted && errors.has('email') }"
								class="form-control"
								id="email"
								name="email"
								type="email"
								v-model="user.email"
								v-validate="'required|email'">
							</b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('email')">
                {{ errors.first("email") }}
              </span>
						</b-form-group>

						<b-form-group class="col-md-6" id="input-group-3" label-for="input-3">
							<label class="ml-2 text-form" for="lastName">Last Name</label>

							<b-form-input
								:class="{ 'is-invalid': submitted && errors.has('surname') }"
								class="form-control"
								id="lastName"
								name="surname"
								type="text"
								v-model="user.surname"
								v-validate="'required|min:3|max:20'">
							</b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('surname')">
                {{ errors.first("surname") }}
              </span>
						</b-form-group>

						<b-form-group class="col-md-6" id="input-group-5" label-for="input-5">
							<label class="ml-2 text-form" for="password">Password</label>

							<input
								:class="{ 'is-invalid': submitted && errors.has('password') }"
								class="form-control"
								id="password"
								name="password"
								ref="password"
								type="password"
								v-model="user.password"
								v-validate="{
                  required: true,
                  regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,16})/
                }"/>

							<span class="invalid-feedback" v-if="submitted && errors.has('password')">
              {{ 'The password should contain Minimum 6 and Maximum 12 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character.'}}
							</span>
						</b-form-group>

						<b-form-group class="col-md-6" id="input-group-6" label-for="input-6">
							<label class="ml-2 text-form" for="confirmPassword">Confirm Password</label>

							<input
								:class="{'is-invalid': submitted && errors.has('confirm_password')}"
								class="form-control"
								data-vv-as="password"
								id="confirmPassword"
								name="confirm_password"
								type="password"
								v-model="user.confirm_password"
								v-validate="'required|confirmed:password'"/>

							<span class="invalid-feedback" v-if="submitted && errors.has('confirm_password')">
                {{ errors.first("confirm_password") }}
              </span>
						</b-form-group>
					</b-form>

					<div class="text-center space">
						<b-btn
							@click="handleSubmit"
							block
							class="col-md-5 float-none d-inline-block"
							pill
							type="submit"
							variant="outline-warning">
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
