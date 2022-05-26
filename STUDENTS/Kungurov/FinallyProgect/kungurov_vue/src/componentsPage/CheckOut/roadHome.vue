<template>
  <div class="home">
    <div class="home_container">
      <div class="home_content_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content">
                <div class="breadcrumbs">
                  <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/cart">Shopping Cart</router-link></li>
                    <li>Checkout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roadHome'
};
</script>

<style>
.home_container {
  background-image: url("https://raw.githubusercontent.com/DeniKungurov/Sublime/Sublime_1/src/assets/img/cart.jpg");
  height: 330px;
}
</style>