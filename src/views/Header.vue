<template>
	<header class="header-atributes">
		<b-navbar toggleable="lg" type="dark">
			<b-navbar-brand to="/">
				<img class="logo-icon" src="../../public/img/logo.png" alt="Responsive image"/>
			</b-navbar-brand>

			<b-navbar-nav class="ml-auto">
				<b-nav-item-dropdown right>
					<template slot="button-content">
						User
					</template>
					<b-dropdown-item to="/profile">
						<font-awesome-icon icon="user" />
						&nbsp;Profile
					</b-dropdown-item>

					<b-dropdown-item to="/settings">
						<font-awesome-icon icon="cog" />
						&nbsp;Settings
					</b-dropdown-item>
					<b-dropdown-divider></b-dropdown-divider>

					<b-dropdown-item to="/login">
						<font-awesome-icon icon="power-off" />
						&nbsp;Logout
					</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-navbar>
		<div class="top-bar">
			<div class="inner">
				<div class="top-bar-orange"></div>
				<div class="top-bar-violet"></div>
				<div class="top-bar-blue"></div>
				<div class="top-bar-green"></div>
				<div class="top-bar-bluesky"></div>
			</div>
		</div>
	</header>
</template>

<style>
	.logo-icon {
		opacity: 1;
		display: block;
		height: auto;
		transition: 0.5s ease;
		backface-visibility: hidden;
		width: 100px;
		padding: 1px;
		position: center;
	}
	.logo-icon:hover {
		opacity: 0.5;
	}
	.top-bar {
		width: 100%;
		height: 7px;
	}

	.inner {
		width: 100%;
		overflow: hidden;
		height: inherit;
	}

	.inner .top-bar-orange,
	.inner .top-bar-violet,
	.inner .top-bar-blue,
	.inner .top-bar-green,
	.inner .top-bar-bluesky {
		width: 20%;
		float: left;
		height: inherit;
	}

	.top-bar-orange {
		background: #f4835b;
	}

	.top-bar-violet {
		background: #555464;
	}

	.top-bar-blue {
		background: #69cde9;
	}

	.top-bar-green {
		background: #aabcbd;
	}

	.top-bar-bluesky {
		background: #9bd6e7;
	}
	.header-atributes {
		background: #2e2e2d;
	}
</style>
