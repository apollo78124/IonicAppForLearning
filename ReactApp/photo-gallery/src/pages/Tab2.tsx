import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { camera, trash, close } from 'ionicons/icons';
import { IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

// //onClick={() => takePhoto()}>
const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  var imagePath = "/assets/imgs/";
  var imageName = "alex.jpg";
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>David Lee Gallery App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
      <IonImg src={imagePath + imageName} />
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
