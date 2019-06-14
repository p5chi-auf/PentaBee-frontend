<template>
	<div class="container-fluid">
		<div class="row position-row">
			<component-menu ></component-menu>
			<div class="div-position-home col">
				<b-card-group deck>
					<b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
						<b-card-text>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</b-card-text>
						<div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
					</b-card>

					<b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
						<b-card-text>
							This card has supporting text below as a natural lead-in to additional content.
						</b-card-text>
						<div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
					</b-card>

					<b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
						<b-card-text>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This card has even longer content than the first to show that equal height action.
						</b-card-text>
						<div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
					</b-card>
				</b-card-group>
			</div>
		</div>
	</div>
</template>

<style>
	.position-row{
		position: absolute;
		height: 100%;
		width: 100%;

	}

	.div-position-home{
		background-color: rgba(67, 71, 71, 0);
		height: available;
		text-align: center;
		padding: 1%;
	}
</style>
