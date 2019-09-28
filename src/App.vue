<template>
  <div id="app">
    <Header />

    <b-button round @click="onMint()">Mint</b-button>


    <div class="container main-container">
      <router-view :key="key"></router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mint } from '@/api';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    },
    onMint() {
      alert("onMint");
      if (this.$store.state.signInError) {
        return this.$router.push({ name: 'Login' });
      }
      mint()
        .then(() => {
          alert(this.$t('BUY_SUCCESS_MSG'));
        })
        .catch((e) => {
          alert(this.$t('BUY_FAIL_MSG'));
          console.log(e);
        });
      
      /*
      buyItem(this.itemId, buyPrice)
        .then(() => {
          alert(this.$t('BUY_SUCCESS_MSG'));
          setNextPrice(this.itemId, buyPrice);
        })
        .catch((e) => {
          alert(this.$t('BUY_FAIL_MSG'));
          console.log(e);
        });
        */
    },
  },
};
</script>

<style>
.main-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
