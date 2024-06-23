import axios from "axios";

const axiosInterceptor = axios.create({
  baseURL: `https://development-rentapp-8d3349904b3d.herokuapp.com/`,
});

axiosInterceptor.interceptors.request.use(
  (config) => {
    const persistRecoil = localStorage.getItem("recoil-persist");
    if (persistRecoil) {
      const { authState } = JSON.parse(persistRecoil);
      if (authState && authState.token && authState.client_id) {
        config.headers.authorization = `Bearer ${authState.token}`;
        config.headers.ClientId = authState.client_id;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   localStorage.clear();
    //   window.location.href = `/login`;
    // } else if (error.response && error.response.status !== 404) {
    //   console.log(error);
    // }
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInterceptor;
