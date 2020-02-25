import axios from 'axios';

/* export const baseURL = process.env.PRODUCTION_ENV === "production"
  ? process.env.VUE_APP_API_URL
  : "http://localhost:3000"; */

let request = axios.create({
  //baseURL: `${baseURL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('njupt_movie_club_token')}`
  }
});

//登录
export const login = (username, password) => {
  return request.post('/api/admin/login', {
      username,
      password
  })
}
//用户信息
export const getUserInfo = () => {
  return request.get('/userInfo');
};

//影评
export const getMovieReview = () => {
  return request.get('/movieReview');
};

//详细影评
export const getMovieReviewDetail = id => {
  return request.get(`/movieReview?id=${id}`);
};

//本周电影
export const getLatestMovies = () => {
  return request.get('/latestMovies');
};