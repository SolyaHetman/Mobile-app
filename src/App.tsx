import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import StartTrainingPage from './pages/Training/StartTrainingPage';
import SettingTrainingPage from './pages/Training/SettingTrainigPage';
import TrainingsPage from './pages/Training/TrainingsPages';
import ToDoListPage from './pages/ToDoList/ToDoListPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home/startTraining">
          <StartTrainingPage />
        </Route>
        <Route exact path="/home/startTraining/settings">
          <SettingTrainingPage />
        </Route>
        <Route exact path="/trainings">
          <TrainingsPage />
        </Route>
        {/* <Route exact path="/home/schedule">
          <ToDoListPage />
        </Route> */}
        <ToDoListPage />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
