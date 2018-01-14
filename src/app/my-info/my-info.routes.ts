
import { AnimeComponent} from './anime/anime.component';
import { CollegeComponent} from './college/college.component';
import { ReadComponent} from './read/read.component';
import { ReadDetailComponent} from './read/read-detail/read-detail.component';
import { TourComponent} from './tour/tour.component';


export const myInfoRoutes = [
    { 
        path:'',
        redirectTo:'read/1',
        pathMath:'full'
    },
    {
        path:'read/:page',
        component:ReadComponent
    },
    {
        path:'read/readDetail/:readId',
        component:ReadDetailComponent
    }
];