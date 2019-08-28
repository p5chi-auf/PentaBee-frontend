<template>
  <div class="row mx-auto col-md-12">
    <img
      :src="userAvatarURL"
      class="mt-1 rounded-circle col-auto"
      width="40px"
      height="40px"
    >
    
    <b-form-textarea
      v-model="parameters.comment"
      placeholder="Leave your comment..."
      class="col-10"
      @keyup.enter="addComment()"
    />
    
    <i class="far fa-comment-dots col-1 mt-5 icon-add-comment" @click="addComment()"/>
  </div>
</template>

<script>
  import userDetailsApi from "../../services/userDetailsApi";
  import { mapGetters } from "vuex";
  import { basePath } from "../../constants/apiEndpoints";
  import ActivityService from "../../services/activityApi";

  export default {
    props:{
      parentId: Number()
    },
    data() {
      return {
        userAvatarURL: '/img/person1.png',
        parameters: {
          comment: '',
          parent: 0
        },
        renderComponent: true
      }
    },
    computed: {
      ...mapGetters('account', ['userId'])
    },
    created() {
      this.getUserInfo()
    },
    methods: {
      getUserInfo() {
        userDetailsApi.userInfo(this.userId)
          .then(response => {
            this.userAvatarURL = basePath + '/' + response.data.avatar["40x40"]
          })
      },
      addComment() {
        this.parameters.parent = this.parentId;
        let message = this.parameters;
        
        ActivityService.addComment(this.$route.params.activityId, message)
          .then(responses => {
            this.$toast.open({
              message: responses.data.message,
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true
            });
            this.$emit('isCommented', 'bye');
            this.parameters= {
              comment: '',
              parent: 0
            }
          })
      }
    }
  }
</script>
