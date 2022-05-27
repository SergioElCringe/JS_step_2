<template>
	<div class="super_container">
		<v-app>
			<Header />
				<div class="view-container">
					<v-main>
						<router-view/>
					</v-main>
				</div>
			<Footer />
		</v-app>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
	components: { Header, Footer },
  data: () => ({
    //
  }),
}
</script>
<style>
.view-container{
	margin: 130px 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  
  }

</style>