<template>
	<footer toggleable="lg" type="dark">
		<div class="footer">
			<div class="bottom-bar">
				<div class="inner">
					<div class="bottom-bar-yellow"></div>
				</div>
			</div>
			<p>
				Copyright {{ new Date().getFullYear() }} &copy; PentaBee. All Rights
				Reserved. Privacy Policy
			</p>
		</div>
	</footer>
</template>

<style>
	.bottom-bar {
		width: 100%;
		height: 2px;
	}
	.inner {
		width: 100%;
		overflow: hidden;
		height: inherit;
	}

	.inner .bottom-bar-yellow {
		width: 100%;
		height: inherit;
	}

	.bottom-bar-yellow {
		background: #ffda00;
	}
</style>