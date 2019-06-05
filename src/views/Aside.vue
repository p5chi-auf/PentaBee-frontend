<template>
	<aside>
		<div class="aside">
			<b-nav class="w-25" vertical>
				<b-nav-item to="/">
					<font-awesome-icon class="fa-lg" icon="home"/>
					&nbsp;Home
				</b-nav-item>
				<b-nav-item to="/login">
					<font-awesome-icon class="fa-lg" icon="sign-in-alt"/>
					&nbsp;Login /
					<b-nav-item to="/registration">
						Registration
					</b-nav-item>
				</b-nav-item>
			</b-nav>
			<!--			<b-collapse id="nav-collapse" is-nav>-->
			<!--				<b-navbar-nav>-->
			<!--					<b-nav-item to="/">-->
			<!--						Home-->
			<!--					</b-nav-item>-->
			<!--					<b-nav-item to="/login">-->
			<!--						Login-->
			<!--					</b-nav-item>-->
			<!--					<b-nav-item to="/registration">-->
			<!--						Registration-->
			<!--					</b-nav-item>-->
			<!--					<b-nav-form>-->
			<!--						<b-form-input-->
			<!--							size="sm"-->
			<!--							class="mr-sm-2"-->
			<!--							placeholder="Search"-->
			<!--						></b-form-input>-->
			<!--						<b-button-->
			<!--							variant="outline-warning"-->
			<!--							size="sm"-->
			<!--							class="my-2 my-sm-0"-->
			<!--							type="submit"-->
			<!--						>-->
			<!--							Search-->
			<!--						</b-button>-->
			<!--					</b-nav-form>-->
			<!--			</b-collapse>-->
		</div>
	</aside>
</template>

<style>
.aside {
	background: #2e2e2d;
	float: left;
	height: 1000px;
	/*width: 50%;*/

}
</style>
