<template>
	<div>
		<div class="contact">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 contact_col">
						<div class="get_in_touch">
							<div class="section_title">
								Get in Touch
							</div>
							<div class="section_subtitle">
								Say hello
							</div>
							<div class="contact_form_container">
								<ContactForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> 
	</div>
</template>

<script>
import ContactForm from './components/ContactForm.vue';
export default {
  name: 'Contact',
  components: { 
		ContactForm, 
	},
};
</script>

<style>
</style>