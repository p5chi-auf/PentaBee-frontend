import API from './';
import { userEndpoints, basePath } from '@/constants/apiEndpoints';


export default {
  getActivityList(filter){
    return API.get(userEndpoints.ACTIVITIES + filter);
  },
  getActivityDetails (id){
    return API.get(userEndpoints.ACTIVITIES + '/' + id);
  },
  deleteActivity(id){
    return API.delete(userEndpoints.ACTIVITIES + '/' + id + '/delete')
  },
  createActivity(data){
    return API.post(userEndpoints.ACTIVITIES + '/create', data)
  },
  editActivity(id, data){
    return API.post( userEndpoints.ACTIVITIES +'/' + id + '/edit', data)
  },
  deleteCoverActivity(data){
    const { id } = data;
    if (id) {
      return API.delete(userEndpoints.ACTIVITIES + '/' + id + '/remove_cover', data);
    }
    return Promise.reject('Id not found');
  },
  getTypes(){
    return API.get( userEndpoints.TYPES)
  },
  applyActivity(id){
    return API.post(userEndpoints.ACTIVITIES +'/'+ id + '/apply')
  },
  inviteUser(activityId, userId){
    return API.post(userEndpoints.ACTIVITIES +'/'+ activityId +'/invite' +'/'+  userId)
  },
  getUsersListByFilter(activityId, filter) {
    return API.get( userEndpoints.ACTIVITIES + '/' + activityId + filter)
  },
  acceptApplicants(activityId, userId){
    return API.post(userEndpoints.ACTIVITIES + '/' + activityId + '/applicants/' + userId + '/accept')
  },
  declineApplicants(activityId, userId){
    return API.post(userEndpoints.ACTIVITIES + '/' + activityId + '/applicants/' + userId + '/decline')
  },
  getComments(activityId){
    return API.get(userEndpoints.ACTIVITIES + '/' + activityId + '/comments')
  },
  editComments(activityId, commentId, data){
    return API.post(userEndpoints.ACTIVITIES + '/' + activityId + '/edit_comment/' + commentId, data)
  },
  addComment(activityId, data){
    return API.post(userEndpoints.ACTIVITIES + '/' + activityId + '/add_comment', data)
  },
  deleteComment(commentId){
    return API.delete(basePath + '/api/comment/' + commentId + '/delete')
  }
};
