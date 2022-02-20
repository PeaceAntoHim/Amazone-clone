# Installation Steps


## How to Implemanting firebase 

1) First you have go to https://firebase.google.com/ and and click "go to console"
2) Create new project do you want to build than click settings icon and after dropdown list click "projcet settings"
3) click add web and enter your nickname web app and click config after that copy that config and save in firebase.js
4) click authentication you can choose what you want use but i just use google 
after you have config that settings copy GOOGLE_ID and GOOGLE_SECRET and save in .env.local

## IF you get some error in this case

Authorization Error
Error 400: redirect_uri_mismatch

You can't sign in to this app because it doesn't comply with Google's OAuth 2.0 policy.

If you're the app developer, register the redirect URI in the Google Cloud Console.

you can just go https://cloud.google.com/appengine/?utm_source=google&utm_medium=cpc&utm_campaign=japac-AU-all-en-dr-bkws-all-all-trial-e-dr-1009882&utm_content=text-ad-none-none-DEV_c-CRE_582319728387-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20Compute%20~%20App%20Engine_cloud%20computing%20-%20cloud_V4-KWID_43700069451405574-aud-970366092687%3Akwd-134064744524&userloc_9072594-network_g&utm_term=KW_api%20google%20cloud&gclid=Cj0KCQiApL2QBhC8ARIsAGMm-KG5HFBTfYtM_64cikIBfdyo5oT141I8YQaO1SzFLKWD025yuAEaUC4aAhbREALw_wcB&gclsrc=aw.ds
this are GCP links to set web app config

1) first you go to APIs & Services and click the credentials added new authorized link javascript origins you can added http://localhosst:3000
2) and create URIs http://localhost:3000/api/auth/callback/google


## How use stripe into your app
1). you can go to this link https://stripe.com/ to see the fiture and what you can get from this app
2). Click unto developers mode and see after dropdown you can click Documentation check to `stripe checkout` in sidebar link to get guide made app with stripe. Than you can click `Accept a payment`
3). That have a guide how to set up stripe in your workspace.


## How to integrating Stripe CLI
1) First you can go to stripe docs and got to `Stripe CLI` and than install that.
2) Then you can run stripe.exe if you use windows in your cmd than you can write stripe login in CLI
3) Then you can write this `stripe listen --forward-to localhost:3000/api/webhook`
4) After that you have STRIPE_SIGNING_SECRET=your_secret_key_you_get_from_cli

## How to creating webhook
1) First you have to install micro and firebase-admin and made webhook.js in api couse all in api folder run in backend with node.js
2) After you have install all you have install permission from firebase go to `console` and click `project settings` then you can go to `service accounts` to `generate new private key` and than pull thae json file to you workspace and rename that to permisson

## How to test payment with dummy card payment 

    use this code payment : 424242424242424
    end exp 04/24
    secure code: 424


## Using npm

Run commands

1) ```npm install```


2) ```npm run dev```


## Or using yarn

Run commands 

1) ```npm install --global yarn```

2) ```yarn install```

3) ```yarn run dev```


### What tech i us to build AMAZON 2.0!

    1). Next.js
    2). React.js
    3). Redux.js
    4). tailwindcss
    5). firebase and firebase-admin
    6). nextAuth.js
    7). heroicons.js
    8). axios
    9). stripe
    10). Web Hooks
    11). micro