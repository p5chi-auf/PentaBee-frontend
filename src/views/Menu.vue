<template>
	<div class="menu-position">
		<b-navbar toggleable="lg" type="dark">
			<b-nav vertical>
				<b-nav-item class="menu-items" to="/">
					<font-awesome-icon class="fa-lg menu-icons" icon="home"/>
					<span>&nbsp;Home</span>
					<hr>
				</b-nav-item>

				<b-nav-item class="menu-items" to="/login">
					<font-awesome-icon class="fa-lg menu-icons" icon="sign-in-alt"/>
					<span>&nbsp;Login</span>
					<hr>
				</b-nav-item>

				<b-nav-item class="menu-items" to="/api/register">
					<font-awesome-icon class="fa-lg menu-icons" icon="pencil-alt"/>
					<span>&nbsp;Registration</span>
					<hr>
				</b-nav-item>
			</b-nav>
		</b-navbar>
	</div>
</template>

<style>
	.menu-position {
		height: 100%;
		position: fixed;
		background: #2e2e2d;
	}

	.menu-icons {
		color: white !important;
	}
	span {
		color: white !important;
	}
	span:hover {
		opacity: 0.5;
	}
</style>

