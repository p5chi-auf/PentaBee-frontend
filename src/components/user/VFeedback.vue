<template>
  <div>
    <!--    <div class="text-right">-->
    <!--      <i-->
    <!--        v-b-tooltip.hover-->
    <!--        title="Show your feedbacks"-->
    <!--        class="fas fa-star-half-alt"-->
    <!--        @click="$bvModal.show('bv-modal-example')"-->
    <!--      />-->
    <!--    </div>-->
    <!--    <b-modal id="bv-modal-example" ref="my-modal" hide-footer>-->
    <!--      <template slot="modal-title">-->
    <!--        All your feedbacks:-->
    <!--      </template>-->
    <!--      <div class="d-block">-->
    <!--        <b-form-group>-->
    <!--          <label class="typo__label ml-3">Search by known technologies:</label>-->
    <!--        </b-form-group>-->
    <!--      </div>-->
    <!--    </b-modal>-->
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
		data: () => ({
      form: {
        results:[]
      },
    }),
    computed: {
      ...mapState('account', ['user']),
      ...mapGetters('account', ['userId'])
    }
  }
</script>
