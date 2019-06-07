<template>
	<div>
		<b-navbar toggleable="lg" type="dark" class="menu-position">
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-nav vertical>
					<b-nav-item class="menu-items" to="/">
						<font-awesome-icon class="fa-lg" icon="home"/>
						&nbsp;Home<hr>
					</b-nav-item>

					<b-nav-item class="menu-items" to="/login">
						<font-awesome-icon class="fa-lg" icon="sign-in-alt"/>
						&nbsp;Login /
						<span to="/registration">
						Registration<hr>
					</span>
					</b-nav-item>

					<b-nav-form class="menu-items">
						<b-form-input size="sm" class="mr-sm-1 col-xs-6" placeholder="Search"></b-form-input>
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
		height: 100%;
		position: fixed;
	}
	.menu-items{
		background-color: #323231;
	}
</style>
