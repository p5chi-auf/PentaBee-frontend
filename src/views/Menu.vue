<template>
	<div class="menu-position">
		<b-navbar toggleable="lg" type="dark">
			<b-nav vertical>
				<b-nav-item to="/">
					<span class="menu-items">
						<font-awesome-icon class="fa-lg menu-icons" icon="home"/>
						&nbsp;Home
					</span>

					<hr>
				</b-nav-item>

				<b-nav-item to="/login">
					<span class="menu-items">
						<font-awesome-icon class="fa-lg menu-icons" icon="sign-in-alt"/>
						&nbsp;Login
					</span>

					<hr>
				</b-nav-item>

				<b-nav-item to="/registration">
					<span class="menu-items">
						<font-awesome-icon class="fa-lg menu-icons" icon="pencil-alt"/>
						&nbsp;Registration
					</span>

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

	.menu-items {
		color: white;
	}
	.menu-items:hover {
		opacity: 0.5;
	}
</style>
