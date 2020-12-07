import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { camera, trash, close } from 'ionicons/icons';
import { IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { usePhotoGallery} from '../hooks/usePhotoGallery';
import { ImageSwap } from '../hooks/imageSwap';
import { forceUpdate } from 'ionicons/dist/types/stencil-public-runtime';
import { setSyntheticLeadingComments } from 'typescript';

/** 
  
  
  var imageName = "alex.jpg";
  const imageLeft = async () => {
    imageName = "fox.jpg";
    console.log("image left");
    //forceUpdate(this);
  };
  const imageRight = async () => {
    imageName = "fox.jpg";
    console.log("image left");
    //const text = React.useState("");
    
  };
  */
 var imagePath = "/assets/imgs/";
const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  var { imageName, ImageRight, ImageLeft } = ImageSwap();
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
      <button onClick={() => ImageLeft()}>
        Left
      </button>

      <button ion-button onClick={() => ImageRight()}>
        Right
      </button>
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
