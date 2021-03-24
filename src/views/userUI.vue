<template>
	<div class="picFile col-12">
		<b-form>
			<b-form-group
					label-for="pylon"
					label="PYLON"
					label-size="lg"
				>
					<b-form-file
						ref="file"
						id="pylon"
						placeholder="Masukkan foto Pylon.."
						size="lg"
						@change="onChangeFileSelected($event, pylon)"
					>
					</b-form-file>
				</b-form-group>
		</b-form>
	</div>
</template>
<script>
export default {

};
</script>
<style>
	.picfile{

	}
</style>
