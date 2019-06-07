<template>
<div class="menu-position">
	<b-navbar toggleable="lg" type="dark" class="w-25" vertical>
		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		<b-collapse id="nav-collapse" is-nav>
			<b-nav vertical>
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

				<b-nav-form>
					<b-form-input size="sm" class="mr-sm-1" placeholder="Search"></b-form-input>
					<b-button variant="warning" size="sm" class="my-2 my-sm-0" type="submit"><font-awesome-icon class="fa-lg" icon="search"/>
					</b-button>
				</b-nav-form>
			</b-nav>
		</b-collapse>
	</b-navbar>
</div>
</template>

<style>
.menu-position {
	background: #2e2e2d;
	/*float: left;*/
	height: 100%;
	width: 200px;
	position: fixed;
}
</style>
