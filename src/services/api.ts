import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '53d0d40105afac1504d1ac6f7724473b',
    language: 'pt-BR',
    include_adult: false,
  },
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2QwZDQwMTA1YWZhYzE1MDRkMWFjNmY3NzI0NDczYiIsInN1YiI6IjY1ODlmNWI2ZGQyNTg5NzFhZTZiYjRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2gmrdMT_OZKOc1JpsTtytvc7iKdLFi2pZRkwdeHb00',
  },
});
