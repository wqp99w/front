import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import MovieContainer from '../pages/movie/MovieContainer';
import MainContainer from '../pages/main/MainContainer';
import MoviePostContainer from '../pages/moviepost/MoviePostContainer';
import WeekMovieContainer from '../pages/weekmovie/WeekMovieContainer';
import MovieReviewContainer from '../pages/movie/moviereview/MovieReviewContainer';
import MyPageContainer from '../pages/mypage/MyPageContainer';
import MylistConatiner from '../pages/mypage/mylist/MylistConatiner';
import CreatePostContainer from '../pages/moviepost/Mypost/CreatePostContainer';
import MyPostContainer from '../pages/moviepost/Mypost/MyPostContainer';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index : true,
        element : <MainContainer/>
      },
      {
        path : "/movie",
        element : <MovieContainer/>
      },
      {
        path : "/moviepost",
        element : <MoviePostContainer/>
      },
      {
        path : "/weekmovie",
        element : <WeekMovieContainer/>
      },
      {
        path : "/movie/moviereview/",
        element : <MovieReviewContainer/>
      },
      {
        path : "/mypage",
        element : <MyPageContainer/>
      },
      {
        path: "/my-list",
        element : <MylistConatiner/>
      },
      {
        path : "/createpost",
        element : <CreatePostContainer/>
      },
      {
        path : "/mypost",
        element : <MyPostContainer/>
      }
    ]
  }
]);



export default router;