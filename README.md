# Nudge
From Idea to Spotlight, One Nudge at a Time!

- 🚀 Fire up your terminal and launch:
```bash
  npm init -y
```

## 🧙‍♂️ Sidekick Alert: Nodemon!
🧙‍♂️ Summon your trusty companion with:

```bash
npm install nodemon --save-dev
```

## 🔐 Local Authentication Key Pair Generation

For the secure operation of our local authentication mechanism, it's essential to generate a unique key pair. This key pair will be the cornerstone of ensuring secure data transactions between your application and the server.

To conjure up this magical key pair, embark on the following incantation in your terminal:

```bash
node tools/generateKeypair
```


## 🧙‍♀️ Invisibility Cloak (.gitignore):
🧙‍♀️ Make your "node_modules/" and ".env" vanish from prying eyes!

  ```bash
node_modules/
.env
```

## 📜 The Secret Scroll (.env):
📜 Craft a .env parchment filled with your arcane secrets (configs).


## 🏰 Setting Up Camp with Grepper
🏰 Create your fortress, **Authentication-NodeJS**, in the realm of MongoDB Atlas.

To establish your stronghold:
1. Navigate to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in or create an account.
2. Create a new project and name it `Nudge`.
3. Within your project, build a new cluster where your data will reside.
4. Secure your cluster with a database user and whitelist your application's IP address.
5. Conjure the connection string by choosing "Connect your application" and select the driver version relevant to your sorcery.
6. Engrave this connection incantation into your `.env` scroll as `MONGODB_URI`, replacing `{username}`, `{password}`, and `{database}` with your specific credentials.

This fortress will not only protect your data but also empower your application with the ancient wisdom of NoSQL databases.


## 🔗 Magical Link

🔗 Enchant a connection string in your .env scroll to link your fortress with the Atlas realm.

```plaintext
MONGODB_URI=mongodb+srv://{username}:{password}@cluster0.lo3cgvx.mongodb.net/{database}
```

## 📧 Council of Admins

📧 Gather the email scrolls of your admin wizards.

```plaintext
ADMIN_EMAILS=s@gmail.com,sa@gmail.com,san@gmail.com
```

## 🕊️ Pigeon Post Setup

🕊️ Configure your owl (nodemailer) with your Gmail credentials for sending messages.

```plaintext
AUTH_EMAIL={yourgmailid}@gmail.com
AUTH_PASS={yourpassword}
```

## 🏠 Homestead

🏠 Establish your HOME_URL as the base of your operations.

```plaintext
HOME_URL=http://localhost:3000/
```

## 📚 Google's Secret Library

Visit the mystical [Google Developer Console](https://console.developers.google.com/) and create OAuth 2.0 credentials. Remember, your secret base is `http://localhost:3000/auth/google/callback`.

Authorised JavaScript origins : http://localhost:3000
Authorised redirect URIs : http://localhost:3000/auth/google/callback


## 🔑 Enchanted Keys

Safeguard your client id and secret in the `.env` scroll.

```plaintext
GOOGLE_AUTH_CLIENT_ID={client_id}.apps.googleusercontent.com
GOOGLE_AUTH_CLIENT_SECRET={secret}
```


## 🗝️ Mystical Session Secret

Concoct a powerful `EXPRESS_SESSION_SECRET` and `JWT_SECRET` potion.

```plaintext
EXPRESS_SESSION_SECRET={give a strong secret here}

JWT_SECRET={give a strong secret here}
```



Firbase 
https://firebase.google.com/?authuser=1

Select 'Add Firebase to your web app'

Initialize Firebase on your web app:
Include the Firebase JavaScript SDK in your HTML file.
Initialize Firebase with the project configuration snippet.

Then go to cloud messaging for web
https://firebase.google.com/docs/cloud-messaging/js/client?authuser=1&hl=en

Add and initialize the FCM SDK
Add this to the html code 'const messaging = getMessaging(app);'

Also import getMessaging like, 
        import { getMessaging } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging.js";

Configure Web Credentials with FCM
Generate a new key pair

Goto project console
Goto project settings
Select Cloud Messaging



On 'Web configuration', under 'Web Push certificates' click 'Generate key pair'

Copy the key pair





Add the following to the html,

getToken(messaging, { vapidKey: '<YOUR_PUBLIC_VAPID_KEY_HERE>' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

Also import the getToken like this, 
  import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging.js";


Replace the <YOUR_PUBLIC_VAPID_KEY_HERE> with the generated key

Now we need to register a service worker before executing getToken()

Now create a fcm-service-worker.js file and add the following code in the html

      navigator.serviceWorker.register("/js/fcm-service-worker.js").then(registration => {
        getToken(messaging, { 
          ServiceWorkerRegistration: registration,
          vapidKey: 'BJuTFtNM8Wm3OtTWE9UJ1IApt2sf6ytNGWVZQlWKn_CqdUE320KGFZZkDMsh0oupr_74mCCnmYq8-J8l2FUxiiE' }).then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });
      })

Now create service worker

Service worker is a script that actually runs in a background and one of its feature is to recive and display push notifictaions

