<template>
	<div class="login-registration-background">
		<b-container fluid>
			<b-row align-h="center" class="mt-5">
				<b-card class="p-3">
					<h4>
						Please Enter Your Information
						<hr/>
					</h4>

          <b-form @submit="this.loginIt()">
            <b-form-group id="input-group-1" label-for="input-1">
              <label class="ml-2 text-form">Username</label>

							<b-form-input
								:class="{'is-invalid':errors.has('username')}"
								class="form-control"
								id="username"
								name="username"
								type="text"
								v-model="user.username"
								v-validate="'required'">
							</b-form-input>

							<span class="invalid-feedback" v-if="errors.has('username')">
                {{ errors.first("username") }}
              </span>
						</b-form-group>

						<b-form-group id="input-group-2" label-for="input-2">
							<label class="ml-2 text-form" for="password">Password</label>

							<input :class="{'is-invalid': errors.has('password')}"
										 class="form-control"
										 id="password"
										 name="password"
										 ref="password"
										 type="password"
										 v-model="user.password"
										 v-validate="'required'"/>

							<span class="invalid-feedback " v-if="errors.has('password')">
                {{ errors.first("password") }}
              </span>
						</b-form-group>

						<div class="text-center button-padding">
							<b-btn
								block
								@click="this.loginIt()"
								pill
								success
								type="submit"
								variant="outline-warning">
								Login
							</b-btn>
						</div>

						<p class="text-center">
							Haven't got a
							<b-link class="link-redirect" to="/">PentaBee</b-link>
							account?

							<b-link class="link-redirect" to="/registration">Sign up</b-link>
							<b-link @click="this.presed()">xxxxxxxx</b-link>
						</p>
					</b-form>
				</b-card>
			</b-row>
		</b-container>
	</div>
</template>

<script>

</script>
