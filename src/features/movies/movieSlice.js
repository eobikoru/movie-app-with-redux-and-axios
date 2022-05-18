import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import moviesApi from '../../common/apis/moviesApi';
import { APIKey } from '../../common/apis/moviesApiKey';
const initialState = {
    movies: {},
    shows :{},
    isLoading :true
};

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies" ,async()=> {
  const movieText = "Harry";
  const response = await moviesApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
  return response.data;
});


export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows" ,async()=> {
  const seriesText = "Friends";
  const response = await moviesApi.get(`?apikey=${APIKey}&s=${seriesText}&type=series`)
  return response.data;
})
 
 const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
      addMovies: (state ,{payload})=>{
         state.movies = payload 
      }
    },
    extraReducers: {
      //the name of the asynthunk
      [fetchAsyncMovies.pending]: (state) => {
        state.isLoading = true;
        console.log("pending");
      },
      //destructure action to be payload
      [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
        state.iSLoading = false;
        console.log(payload);
        return { ...state, movies: payload };
      },
      [fetchAsyncMovies.rejected]: (state) => {
        state.ISLoading = false;
        console.log("rejected");
      },
      [fetchAsyncShows.fulfilled]: (state, { payload }) => {
        state.iSLoading = false;
        console.log(payload);
        return { ...state, shows: payload };
      },
    },
})
export const getAllMovies = (state) => state.movies.movies
export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;
