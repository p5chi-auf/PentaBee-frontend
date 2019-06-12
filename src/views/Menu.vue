<template>
	<div class="menu-position">
		<b-navbar toggleable="lg" type="dark">
<!--			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->
<!--			<b-collapse id="nav-collapse" is-nav>-->
				<b-nav vertical>
					<b-nav-item class="menu-items" to="/">
						<span class=""><font-awesome-icon class="fa-lg" icon="home"/>
						&nbsp;Home<hr></span>
					</b-nav-item>

					<b-nav-item class="menu-items" to="/login">
						<font-awesome-icon class="fa-lg" icon="sign-in-alt"/>
						&nbsp;Login<hr>
					</b-nav-item>

					<b-nav-item class="menu-items" to="/api/register">
						<font-awesome-icon class="fa-lg" icon="pencil-alt"/>
						&nbsp;Registration
					</b-nav-item>
				</b-nav>
<!--			</b-collapse>-->
		</b-navbar>
	</div>
</template>

<style>
.menu-position {
	height: 100%;
	position: fixed;
	background: #2e2e2d;
}

.menu-icons{
	background-color: #1e1e21 !important;
}
.ative{
	width: 500px;
}
.inactive{
	width: 50px;
}
</style>
