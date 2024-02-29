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
