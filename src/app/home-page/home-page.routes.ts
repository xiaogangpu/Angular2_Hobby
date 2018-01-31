
import { AnimeComponent} from './anime/anime.component';
import { ReadComponent} from './read/read.component';
import { ReadDetailComponent} from './read/read-detail/read-detail.component';
import { TourComponent} from './tour/tour.component';
import { TourDetailComponent} from './tour/tour-detail/tour-detail.component';
import { InfiniteScrollDetailComponent} from './infinite-scroll/infinite-scroll-detail/infinite-scroll-detail.component';
import {HomePageComponent} from './home-page.component';

export const homePageRoutes = [
    { 
        path:'',
        redirectTo:'main',
        pathMath:'full'
    },
    {
        path:'main',
        component:HomePageComponent
    },
    {
        path:'read/:page',
        component:ReadComponent
    },
    {
        path:'read/readDetail/:readId',
        component:ReadDetailComponent
    },
    {
        path: 'tour/:page',
        component:TourComponent
    },
    {
        path: 'tour/tourDetail/:tourId',
        component:TourDetailComponent
    },
    {
        path: 'infinite-scroll-detail/:detailId',
        component:InfiniteScrollDetailComponent
    }
];