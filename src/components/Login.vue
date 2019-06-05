<template>
	<div class="background">
		<b-container fluid>
			<b-row align-h="center" class="mt-5">
				<b-card class="p-3">
					<h4>
						Please Enter Your Information
						<hr/>
					</h4>

					<b-form @submit.prevent="handleSubmit">
						<b-form-group id="input-group-1" label-for="input-1">
							<label class="ml-2" for="username">Username</label>

							<b-form-input
								:class="{'is-invalid': submitted && errors.has('username')}"
								class="form-control"
								id="username"
								name="username"
								type="text"
								v-model="user.username"
								v-validate="'required'">
							</b-form-input>

							<span class="invalid-feedback" v-if="submitted && errors.has('username')">
                {{ errors.first("username") }}
              </span>
						</b-form-group>

						<b-form-group id="input-group-2" label-for="input-2">
							<label class="ml-2" for="password">Password</label>

							<input :class="{'is-invalid': submitted && errors.has('password')}"
										 class="form-control"
										 id="password"
										 name="password"
										 ref="password"
										 type="password"
										 v-model="user.password"
										 v-validate="'required'"/>

							<span class="invalid-feedback " v-if="submitted && errors.has('password')">
                {{ errors.first("password") }}
              </span>
						</b-form-group>

						<div class="text-center space">
							<b-btn
								@click="handleSubmit"
								block
								pill
								type="submit"
								variant="outline-warning">
								Login
							</b-btn>
						</div>

						<p class="text-center">
							Haven't got a
							<b-link class="link" to="/">PentaBee</b-link>
							account?

							<b-link class="link" to="/registration">Sign up</b-link>
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
