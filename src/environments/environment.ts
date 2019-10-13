// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {ENCRYPTION_AES_CTR} from '../app/constants/encryption-types';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCVB7z_Qjw2axFVCFayJkZiye4v_IfE-JM',
    authDomain: 'passwords-app.firebaseapp.com',
    databaseURL: 'https://passwords-app.firebaseio.com',
    projectId: 'passwords-app',
    storageBucket: '',
    messagingSenderId: '349391034347',
    appId: '1:349391034347:web:897b033f37517917902bae'
  },
  defaultEncryptionDriver: ENCRYPTION_AES_CTR
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
