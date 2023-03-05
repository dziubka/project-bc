<template>
  <div class="site-header">
    <div class="container">
      <div class="site-header-items">
        <a href="#" class="site-header-items_logo">
          <img src="@/assets/img/SiteLogo.svg" alt="">
        </a>
        <div class="site-header-items_nav">
          <div class="site-header-items_nav-item">
            <a href="#">Why bamboo</a>
            <a href="#">Suites</a>
            <a href="#">FAQ</a>
            <a href="#">Pricing</a>
          </div>
          <div class="site-header-items_nav-item">
            <a href="#">Contact</a>
            <a href="#">Sign In</a>
            <a href="#" class="button">
              <div class="button-text">Try for Free</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteHeader"
}
</script>

<style lang="scss">
@import "@/assets/styles/components/site-header";
</style>