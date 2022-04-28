<template>
  	<div class="footer_overlay">
		<footer class="footer">
			<div class="footer_background"
				style="background-image:url(https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/footer.jpg)">
			</div>
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="footer_content d-flex flex-lg-row flex-column align-items-center justify-content-between">
							<Logo/>
                            <Socials class="footer_social" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import Socials from '../Socials/Socials.vue';
import Logo from '../Logo/Logo.vue';

export default {
    name: 'Footer',
    components: { Socials, Logo }
}
</script>

<style>

</style>