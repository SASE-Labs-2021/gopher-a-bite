import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import SubmitReview from './Components/SubmitReview';
import PastReviews from './Components/PastReviews';
import './bootstrap.css';
function Reviews() {
  return (
    <div className="App">

      <NavigationBar /> 
      <SubmitReview/>
      <PastReviews/>
      Created by SASE Labs 2020-2021 
    </div>
  );
}

export default Reviews;