
import { AnimeComponent} from './anime/anime.component';
import { ReadComponent} from './read/read.component';
import { ReadDetailComponent} from './read/read-detail/read-detail.component';
import { TourComponent} from './tour/tour.component';
import { TourDetailComponent} from './tour/tour-detail/tour-detail.component';
import {MyInfoComponent} from './my-info.component';

export const myInfoRoutes = [
    { 
        path:'',
        redirectTo:'menu',
        pathMath:'full'
    },
    {
        path:'menu',
        component:MyInfoComponent
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
    }
];