import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dhar Nea Choli</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dhar Nea Choli</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Dhar Nea Choli" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
