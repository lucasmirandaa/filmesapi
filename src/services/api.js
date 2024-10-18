import axios from "axios";
//https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzk4MmJhYTkwNzRhNDRiNWNhNjJkNzljNWFkNWMwOSIsIm5iZiI6MTcyOTIxMTkzMi44NzcyNTksInN1YiI6IjY3MTFhYjMxMDk3YzNkNzc2MGY4NzM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IwHm1j4C4ahkR3FbXHvpekeSrkce8uRQEUKDpEI69ok'
      }
}); 

export default api;