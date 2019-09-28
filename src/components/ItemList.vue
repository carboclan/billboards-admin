<template>
  <div class="columns is-multiline is-mobile">
    <div
      v-for="item in items"
      v-if="item"

      :key="item.id.toString()"
      class="column
           is-full-mobile
           is-one-quarter-tablet
           is-one-quarter-desktop
           is-one-quarter-widescreen
           is-one-quarter-fullhd">
      <template v-if="1 <= item.id && item.id <= 114">
        <div class="card">
          <div class="card-image">
            <figure class="image is-5by4">
              <img v-lazy="getCardImage(item.id)">
            </figure>
          </div>
          <div class="card-content">
            <div class="content is-small">
              <h4>{{ item.nickname }} · {{ item.name }}</h4>
              <ul>
                <li>{{ $t('Owner') }}：
                  <router-link
                    v-if="item.owner"
                    :to="{ name: 'User', params:{address: item.owner}}">
                    {{ item.owner.slice(-6).toUpperCase() }}
                  </router-link>
                </li>
                <li>{{ $t('Current Price') }}: {{ toDisplayedPrice(item.price) }}</li>
              </ul>
              <p class="item-slogan">{{ $t('Slogan') }}: {{ toDisplayedAd(item.id) }}</p>
              <el-button
                style="position: relative;z-index: 99;"
                @click="showDialog(item.id)"
              >购买</el-button>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div
      class="column
      is-full-mobile
      is-one-quarter-tablet
      is-one-quarter-desktop
      is-one-quarter-widescreen
      is-one-quarter-fullhd">
      <div class="card mine">
        <el-button
          type="primary"
          @click="dialogVisible = true">mint</el-button>
      </div>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      title="提示"
      width="500px">
      <el-form
        ref="form"
        :model="form"
        label-width="70px">
        <el-form-item label="拥有者">
          <el-input v-model="form.owner"/>
        </el-form-item>
        <el-form-item label="当前价格">
          <el-input v-model="form.nowPrice"/>
        </el-form-item>
        <el-form-item label="广告标语">
          <el-input v-model="form.adslogan"/>
        </el-form-item>
        <el-form-item label="图片地址">
          <el-input v-model="form.adimg"/>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="mintFunc">确定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- <router-link
      v-for="b in billboards"
      :to="{ name: 'Item', params:{id: b.id}}"
      :key="b.id.toString()"
      class="column
           is-full-mobile
           is-one-quarter-tablet
           is-one-quarter-desktop
           is-one-quarter-widescreen
           is-one-quarter-fullhd">
      <template>
        <div class="card">
          <div class="card-content">
            <div class="content is-small">
              <ul>
                <li>{{ $t('Owner') }}：
                  <router-link
                    v-if="item.owner"
                    :to="{ name: 'User', params:{address: b.owner}}">
                    {{ item.owner.slice(-6).toUpperCase() }}
                  </router-link>
                </li>
                <li>{{ $t('Current Price') }}: {{ toDisplayedPrice(b.price) }}</li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </router-link> -->

  </div>
</template>

<script>
import { toReadablePrice } from '@/util';
import { mint, getAbOwner, getAbPrice } from '@/api';

export default {
  name: 'ItemLists',
  // props: ['billboards', 'itemIds'],
  props: ['itemIds'],

  data() {
    return {
      dialogVisible: false,
      form: {
        owner: '',
        nowPrice: '',
        adslogan: '',
        adimg: '',
      },
    };
  },

  computed: {
    billboards() {
      /* return this.billboards.map((id) => {
        const item = this.$store.state.billboards[id];
        return item || { id };
      }); */
    },
    items() {
      return this.itemIds.map((id) => {
        const item = this.$store.state.items[id];
        return item || { id };
      });
    },
  },

  watch: {
    billboards(newBillboards) {
      newBillboards.forEach((itemId) => {
        this.$store.dispatch('FETCH_BILLBOARD', itemId);
      });
    },
    itemIds(newItemIds) {
      newItemIds.forEach((itemId) => {
        this.$store.dispatch('FETCH_ITEM', itemId);
        this.$store.dispatch('FETCH_AD', itemId);
      });
    },
  },

  created() {

  },

  methods: {
    toDisplayedPrice(priceInWei) {
      const readable = toReadablePrice(priceInWei);
      return `${readable.price} ${readable.unit}`;
    },
    toDisplayedAd(id) {
      const ad = this.$store.state.ads[id];
      if (ad && ad.length >= 45) {
        return `${ad.slice(0, 44)} ...`;
      }
      return ad;
    },
    getCardImage(id) {
      // return `http://test.cdn.hackx.org/heros/${id}.jpg`;
      return `static/assets/heros/${id}.jpg`;
    },
    showDialog(id) {
      this.dialogVisible = true;
      this.getInfo(id);
    },
    async getInfo(id) {
      const owner = await getAbOwner(id);
      const price = await getAbPrice(id);

      this.form.owner = owner;
      this.form.nowPrice = price;
    },
    async mintFunc() {
      if (!this.form.adslogan && !this.form.adimg) return this.$message.warning('请完善内容');
      return this.$message('buy');
      // mint(1)
      //   .then(() => {
      //     // eslint-disable-next-line no-alert
      //     alert(this.$t('BUY_SUCCESS_MSG'));
      //   })
      //   .catch((e) => {
      //     // eslint-disable-next-line no-alert
      //     alert(this.$t('BUY_FAIL_MSG'));
      //     console.log(e);
      //   });

      // // eslint-disable-next-line no-alert
      // alert('onMint');
      // if (this.$store.state.signInError) {
      //   return this.$router.push({ name: 'Login' });
      // }
      /* mint()
        .then(() => {
          alert(this.$t('BUY_SUCCESS_MSG'));
        })
        .catch((e) => {
          alert(this.$t('BUY_FAIL_MSG'));
          console.log(e);
        }); */

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
      // return true;
    },
  },
};
</script>
 <style scoped>
.item-slogan {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}

.mine {
  height: 492px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

