import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NonProfitPage from '../components/communityPages/NonProfitPage';
import CommunityCollege from '../components/communityPages/CommunityCollegesPage';
import BoardOfDirectorsPage from '../components/communityPages/BoardOfDirectorsPage';
import SocialImpactPage from '../components/communityPages/SocialImpactPage';
import HighSchoolProg from '../components/communityPages/HighSchoolProgPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Community from '../componentsHamz/Community';
import Home from '../components/Home';
import ContactsPage from '../components/eventsPages/ContactsPage';
import EventsPage from '../components/eventsPages/EventsPage';
import SchedulePage from '../components/eventsPages/SchedulePage';
import CulturalFoodsPage from '../components/eventsPages/CulturalFoodsPage';
import DogJogPage from '../components/eventsPages/DogJogPage';
import PolarDivePage from '../components/eventsPages/PolarDivePage';
import MusicConcertPage from '../components/eventsPages/MusicConcertPage';
import TradeShowPage from '../components/eventsPages/TradeShowPage';
import CautionPage from '../components/newsPages/CautionPage';
import FunPage from '../components/newsPages/FunPage';
import ConcernsPage from '../components/newsPages/ConcernsPage';
import NewsPage from '../components/newsPages/NewsPage';
import ContactUsPage from '../components/pressPages/ContactUsPage';
import PressPage from '../components/pressPages/PressPage';
import SubscribePage from '../components/pressPages/SubscribePage';
import DonationPage from '../components/sponsorPages/DonationPage';
import FutureEventsPage from '../components/sponsorPages/FutureEventsPage';
import SponsorsPage from '../components/sponsorPages/SponsorsPage';
import SponsorTiersPage from '../components/sponsorPages/SponsorTiersPage';
import SponsorFormPage from '../components/sponsorPages/SponsorFormPage';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';


const AppRouter = () => (
  <BrowserRouter >
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about_us" component={AboutUs} exact={true} />
        <Route path="/community" component={Community} exact={true} />
        <Route path="/community/non_profits" component={NonProfitPage} />
        <Route path="/community/community_colleges" component={CommunityCollege} />
        <Route path="/community/board_of_directors" component={BoardOfDirectorsPage} />
        <Route path="/community/social_impact" component={SocialImpactPage} />
        <Route path="/community/high_school_programs" component={HighSchoolProg} />
        <Route path="/events" component={EventsPage} exact={true}/>
        <Route path="/events/cultural_foods" component={CulturalFoodsPage} />
        <Route path="/events/music_concert" component={MusicConcertPage} />
        <Route path="/events/dog_jog" component={DogJogPage} />
        <Route path="/events/trade_show" component={TradeShowPage} />
        <Route path="/events/polar_dive" component={PolarDivePage} />
        <Route path="/events/schedule" component={SchedulePage} />
        <Route path="/events/contact" component={ContactsPage} />
        <Route path="/sponsors" component={SponsorsPage} exact={true}/>
        <Route path="/sponsors/forms" component={SponsorFormPage} />
        <Route path="/sponsors/donations" component={DonationPage} />
        <Route path="/sponsors/future_events" component={FutureEventsPage} />
        <Route path="/sponsors/tiers" component={SponsorTiersPage} />
        <Route path="/press" component={PressPage} exact={true}/>
        <Route path="/press/contact_us" component={ContactUsPage} />
        <Route path="/press/stay_in_touch" component={SubscribePage} />
        <Route path="/news" component={NewsPage} exact={true}/>
        <Route path="/news/concerns" component={ConcernsPage} />
        <Route path="/news/fun" component={FunPage} />
        <Route path="/news/saftey" component={ConcernsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      
    </div>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
