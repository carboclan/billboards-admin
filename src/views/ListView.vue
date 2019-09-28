<template>
  <div class="">
    <div
      v-if="loading"
      class="loader-wrapper">
      <pulse-loader/>
    </div>
    <ItemList :item-ids="itemIds" />
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader';
import ItemList from '@/components/ItemList';
import { getTotal, getItemIds } from '@/api';
import { toReadablePrice } from '@/util';

export default {
  components: {
    PulseLoader,
    ItemList,
  },

  data() {
    return {
      loading: false,
      itemIds: [],
      total: null,
    };
  },

  computed: {},
  watch: {},

  created() {
    this.getItemIdFunc();
  },

  methods: {
    async getItemIdFunc() {
      // this.loading = false;
      console.log('go');
      const total = await getTotal();
      console.log('total', total);
      const itemIds = await getItemIds(0, total);
      this.itemIds = itemIds;
      this.total = total;
      console.log('itemIds', this.itemIds);
    // this.loading = false;
    },
    toDisplayedPrice(priceInWei) {
      const readable = toReadablePrice(priceInWei);
      return `${readable.price} ${readable.unit}`;
    },
  },
};
</script>
<style scoped>
.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>

