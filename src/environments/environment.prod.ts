import {ENCRYPTION_AES_CBC} from '../app/constants/encryption-types';

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: 'AIzaSyCVB7z_Qjw2axFVCFayJkZiye4v_IfE-JM',
    authDomain: 'passwords-app.firebaseapp.com',
    databaseURL: 'https://passwords-app.firebaseio.com',
    projectId: 'passwords-app',
    storageBucket: '',
    messagingSenderId: '349391034347',
    appId: '1:349391034347:web:897b033f37517917902bae'
  },
  defaultEncryptionDriver: ENCRYPTION_AES_CBC
};
