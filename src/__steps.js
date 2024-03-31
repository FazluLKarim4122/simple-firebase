/**
 * ---------------------------------------------------------
 *           INITIAL INSTALLATION
 * -------------------------------------
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. DANGER : do not publish or make firebase config to public by pushing those to github
 * -----------------------------------
 *                 INTEGRATION
 * ----------------------------
 * 7. go to  docs > build > authentication > web > get started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx:  import getAuth from firebase/auth
 * 10. Create const auth = getAuth(app)
 * ----------------------------------
 *                    PROVIDER
 * ------------------------------------------
 * 11. import googleauthprovider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate signin method from authorized section(google, github, twitter) to avoid error firebase not installed 
 * 14. [vite]: change 127.0.0.1 to localhost
 */

/**
 *               Github firebase application auth provider
 * ----------------------------------------------------------
 * at first activate the auth provider (create a)
 * 1. go to my profile> setting > (scroll down) developer setting
 * 2. chaile new github application create korte pari
 * 3. Give a GitHub App name , preview and callback url from firebase sign in method
 * 4. webhook apatoto not active dilam, jodi kono hook use kori tahole active kore dibo 
 * 5. then check Only on this account > create github app
 * 6. then client ID and client secrets(generate) set in firebase 
 * 7. then to add go to web > github
 * 
 */