<template>
	<div class="login-registration-background">
		<b-container fluid>
			<b-row align-h="center" class="mt-5">
				<b-card class="p-3">
					<h4>
						Please Enter Your Information
						<hr/>
					</h4>

          <b-form @submit.prevent="handleSubmit">
            <b-form-group id="input-group-1" label="Username:" label-for="username">
							<b-form-input
								id="username"
								name="username"
								v-model="user.username"
								type="text"
								class="form-control"
								:class="{'is-invalid': submitted && errors.has('username')}"
								v-validate="'required'">
							</b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('username')">
                {{ errors.first("username") }}
              </span>
						</b-form-group>

						<b-form-group id="input-group-2" label="Password:" label-for="password">
							<b-form-input
								id="password"
								name="password"
								v-model="user.password"
								type="password"
								ref="password"
								class="form-control"
								:class="{'is-invalid': submitted && errors.has('password')}"
								v-validate="'required'"
							></b-form-input>

							<span class="invalid-feedback " v-if="submitted && errors.has('password')">
                {{ errors.first("password") }}
              </span>
						</b-form-group>

						<div class="text-center button-padding">
							<b-btn
								@click="handleSubmit"

								type="submit"
								variant="outline-warning"
								block
								pill
							>
								Login
							</b-btn>
						</div>

						<p class="text-center">
							Haven't got a
							<b-link class="link-redirect" to="/">PentaBee</b-link>
							account?

							<b-link class="link-redirect" to="/registration">Sign up</b-link>
						</p>
					</b-form>
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
        password: ""
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          alert("Your data are submit\n\n" + JSON.stringify(this.user));
        }
      });
    }
  }
};
</script>
