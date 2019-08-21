<template>
  <div class="comments-component">
    <div class="border-comments-field">
      <write-comment class="row ml-4 mt-4" @isCommented="getCommentsActivity($route.params.activityId)"/>

      <p class="ml-4 mt-2">{{ comments.length }} comments</p>

      <hr class="line-comments-height">

      <div v-for="(comment, index) in comments" :key="comment"
           class="row mt-2 ml-3 mr-5 mb-2 comments-field-background"
      >
        <div class="row col-md-12 ml-2 mt-4">
          <img
            v-if="comment.user.avatar"
            :src="backImage + '/' + comment.user.avatar['40x40']"
            class="mt-1 ml-2 rounded-circle col-auto"
            width="40px"
            height="40px"
          >

          <img v-else :src="userImageAvatarUrl" height="40px" width="40px" class="mt-1 ml-2 rounded-circle col-auto">

          <span class="col-auto">
            <p>{{ comment.user.name + ' ' + comment.user.surname }}: {{ comment.created_at | formatDateTime }}</p>

            <p>{{ comment.comment }}</p>

            <p>{{ comment.id }}</p>
          </span>
        </div>

        <div class="row col-md-12 ml-5 justify-content-left">
          <i
            v-if="comment.user.id === userId"
            class="fas fa-edit mt-2 ml-2"
            @click="editComment(comment.id, comment.comment)"
          />

          <i class="fas fa-reply-all mt-2 ml-2" @click="reply =! reply"/>

          <i v-if="comment.user.id === userId"
             class="fas fa-trash-alt mt-2 ml-2 mr-2"
             @click="deleteComment(comment.id)"
          />

          <p>{{ index }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ActivityService from '../../services/activityApi';
  import { basePath } from '../../constants/apiEndpoints';
  import { mapGetters } from 'vuex';
  import WriteComment from './WriteComment';

  export default {
    components: {
      WriteComment: WriteComment,
    },
    data() {
      return {
        comments: {
          created_at: 1232343545,
          updated_at: 4234324234,
        },
        userImageAvatarUrl: '/img/person1.png',
        backImage: basePath,
        parameters: {
          comment: String,
          parent: 0,
        },
        reply: false,
      };
    },
    computed: {
      ...mapGetters('account', ['userId']),
    },
    created() {
      this.getCommentsActivity(this.$route.params.activityId);
    },
    methods: {
      getCommentsActivity(id) {
        ActivityService.getComments(id).then(response => {
          this.comments = response.data;
        });
      },
      editComment(commentId, commentMessage) {
        this.parameters.comment = commentMessage;

        ActivityService.editComments(this.$route.params.activityId, commentId, this.parameters)
          .then(responses => {
            this.$toast.open({
              message: responses.data.message,
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            });
          });
      },
      deleteComment(commentId) {
        ActivityService.deleteComment(commentId)
          .then(responses => {
            this.$toast.open({
              message: responses.data.message,
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            });
            this.getCommentsActivity(this.$route.params.activityId);
          });
      }
    }
  }
</script>
