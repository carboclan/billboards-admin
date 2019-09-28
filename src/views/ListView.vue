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
      loading: true,
      itemIds: [],
      total: null,
    };
  },

  computed: {},
  watch: {},

  async created() {
    this.total = await getTotal();
    const itemIds = await getItemIds(0, this.total);
    this.itemIds = itemIds;
    this.loading = false;
  },

  methods: {
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

