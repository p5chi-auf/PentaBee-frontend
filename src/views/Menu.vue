<template>
	<div class="menu-position">
		<b-navbar toggleable="lg" type="dark">
			<b-nav vertical>
				<b-nav-item class="menu-items" to="/">
					<span>
						<font-awesome-icon class="fa-lg menu-icons" icon="home"/>
						&nbsp;Home
					</span>

					<hr>
				</b-nav-item>

				<b-nav-item class="menu-items" to="/login">
					<span>
						<font-awesome-icon class="fa-lg menu-icons" icon="sign-in-alt"/>
						&nbsp;Login
					</span>

					<hr>
				</b-nav-item>

				<b-nav-item class="menu-items" to="/api/register">
					<span>
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

	span {
		color: white;
	}
	span:hover {
		opacity: 0.5;
	}
</style>
