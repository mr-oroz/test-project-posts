import instance from "./settings";


const getPosts = (url) => instance.get(`/${url}`);
const getUsers = (url) => instance.get(`/${url}`);
const getComments = (url) => instance.get(`/${url}`);
const getAlbums = (url) => instance.get(`/${url}`);



export const service = {
  getPosts,
  getUsers,
  getComments,
  getAlbums
}
