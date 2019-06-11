<template>
	<div class="menu-position">
		<b-navbar toggleable="lg" type="dark">
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-nav vertical>
					<b-nav-item class="menu-items" to="/">
						<font-awesome-icon class="fa-lg" icon="home"/>
						&nbsp;Home<hr>
					</b-nav-item>

					<b-nav-item class="menu-items" to="/login">
						<font-awesome-icon class="fa-lg" icon="sign-in-alt"/>
						&nbsp;Login<hr>
					</b-nav-item>

					<b-nav-item class="menu-items" to="/registration">
						<font-awesome-icon class="fa-lg" icon="pencil-alt"/>
						&nbsp;Registration<hr>
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
		background: #2e2e2d;
	}

	.menu-items{
		background-color: #323231;
	}
</style>
<!--<template>-->
<!--	<div id="sidebar">-->
<!--		<div class="toggle-btn" @click="toggleSidebar()">-->
<!--			<span></span>-->
<!--			<span></span>-->
<!--			<span></span>-->
<!--		</div>-->
<!--		<ul>-->
<!--			<li>-->
<!--				<b-nav-item class="menu-items" to="/">-->
<!--					<font-awesome-icon class="fa-lg" icon="home"/>-->
<!--					&nbsp;Home-->
<!--				</b-nav-item>-->
<!--			</li>-->
<!--			<li>About</li>-->
<!--			<li>Contact</li>-->
<!--		</ul>-->
<!--	</div>-->
<!--</template>-->

<!--<style>-->
<!--* {-->
<!--	margin: 0px;-->
<!--	padding: 0px;-->
<!--	font-family: sans-serif;-->
<!--}-->

<!--#sidebar {-->
<!--	position: fixed;-->
<!--	width: 200px;-->
<!--	height: 100%;-->
<!--	background: #151719;-->
<!--	left: -200px;-->
<!--}-->

<!--#sidebar.active {-->
<!--	left: 0px;-->
<!--}-->

<!--#sidebar ul li {-->
<!--	color:rgba(230,230,230,0.9);-->
<!--	list-style: none;-->
<!--	padding: 15px 10px;-->
<!--	border-bottom: 1px solid rgba(100,100,100,0.3);-->
<!--}-->

<!--#sidebar .toggle-btn {-->
<!--	position: absolute;-->
<!--	left: 230px;-->
<!--	top: 20px;-->
<!--}-->

<!--#sidebar .toggle-btn span {-->
<!--	display: block;-->
<!--	width: 30px;-->
<!--	height: 5px;-->
<!--	background: #151719;-->
<!--	margin: 5px 0px;-->
<!--}-->

<!--</style>-->


<!--<script>-->
<!--  export default {-->
<!--    methods: {-->
<!--      toggleSidebar() {-->
<!--        document.getElementById("sidebar").classList.toggle('active');-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->
