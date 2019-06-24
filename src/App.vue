<template>
	<div id="app">
		<component-header></component-header>
		<div class="container-fluid">
		<div class="row row-position">
		<component-menu class="menu.content"></component-menu>
		<component-layout class="col"></component-layout>
		</div>
		</div>
		<component-footer></component-footer>
	</div>
</template>
<style>
	.row-position{
		position: absolute;
		height: 100%;
		width: 100%;
	}
	</style>
