export default {
  data (){
    return{
      posts: [],
      error: [],

      user:{

        username : "",
        password : ""

      },
      API_URL : this.axios.create({
        baseURL: 'http://api.pentabee.local/api/login'
      })
    }
  },

  loginIt(){
    console.log(this.API_URL);
    this.axios.post(this.API_URL, this.user).then (response => {
      this.posts = response.data
    }).catch (
      e => {this.error.push(e)})
  },
  presed(){
    console.log(this.API_URL)
  }
}
