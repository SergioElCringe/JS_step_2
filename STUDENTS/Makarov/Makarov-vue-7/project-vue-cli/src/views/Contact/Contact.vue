<template>
    <Header />
    <SideMenu/>

	<div class="contact">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 contact_col">
					<div class="get_in_touch">
						<div class="section_title">Get in Touch</div>
						<div class="section_subtitle">Say hello</div>
						<div class="contact_form_container">
							<Form />
						</div>
					</div>
				</div>
				<div class="col-lg-3 offset-xl-1 contact_col">
                    <Info />
				</div>
			</div>
			<div class="row map_row">
				<div class="col">

                    <GoogleMap />

				</div>
			</div>
		</div>
	</div>



    <Footer />
</template>

<script>
import Header from '@components/Header/Header.vue';
import SideMenu from '@components/SideMenu/SideMenu.vue';
import Footer from '@components/Footer/Footer.vue';
import GoogleMap from './components/GoogleMap.vue';
import Info from './components/Info.vue';
import Form from './components/Form.vue'

export default {
    name: 'Contact',
    components: { Header, SideMenu, Footer, GoogleMap, Info, Form }, 
}
</script>

<style>
    .contact
    {
        width: 100%;
        background: #FFFFFF;
        z-index: 2;
        padding-top: 130px;
        padding-bottom: 97px;
    }
    .section_title
    {
        font-size: 24px;
        font-weight: 600;
        color: #1b1b1b;
    }
    .section_subtitle
    {
        font-size: 14px;
        font-weight: 400;
        color: #6c6a74;
        margin-top: 3px;
    }
    .contact_form_container
    {
        width: 100%;
        margin-top: 46px;
    }
    
    .map_row
    {
        margin-top: 98px;
    }


@media only screen and (max-width: 991px) {
	.contact_col:first-child {
		margin-bottom: 90px;
	}
}

@media only screen and (max-width: 575px) {
	.contact_form label	{
		font-size: 13px;
	}
	.contact_input	{
		height: 41px;
	}
}
</style>