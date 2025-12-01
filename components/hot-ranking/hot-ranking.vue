<template>
  <view class="ranking">
    <image class="ranking-bg" :src="getRankingBg" />
    <text class="ranking-text" :class="{ 'text-white': ranking <= 3 }">{{ ranking }}</text>
  </view>
</template>

<script>
	// 在组件的 <script> 标签内
import ranking1 from '@/static/images/ranking-1.png';
import ranking2 from '@/static/images/ranking-2.png';
import ranking3 from '@/static/images/ranking-3.png';
import rankingOther from '@/static/images/ranking-other.png';

export default {
  name: 'hot-ranking',
	data() {
		return {
			// 将所有图片路径存储在一个映射中
			rankingImages: {
				1: ranking1,
				2: ranking2,
				3: ranking3,
				other: rankingOther
			}
		}
	},
  props: {
    ranking: {
      type: Number,
      required: true
    }
  },
  /**
   * 当依赖值发生变化时，会重新计算
   */
  computed: {
    getRankingBg() {
			if (this.ranking <= 3) {
				// 直接从 data/map 中获取已引入的图片变量
				return this.rankingImages[this.ranking];
			}
			return this.rankingImages.other;
		}
  }
};
</script>

<style lang="scss" scoped>
.ranking {
  position: relative;
  text-align: center;
  width: 18px;
  height: 20px;
  .ranking-bg {
    width: 100%;
    height: 100%;
  }
  .ranking-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-55%, -55%);
    font-size: $uni-font-size-sm;
    font-weight: bold;
    color: $uni-text-color;
  }
  .text-white {
    color: white;
  }
}
</style>
