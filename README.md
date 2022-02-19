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

## Using npm

Run commands

1) ```npm install```


2) ```npm run dev```


## Or using yarn

Run commands 

1) ```npm install --global yarn```

2) ```yarn install```

3) ```yarn run dev```


### If you see the window below then you are set to build AMAZON 2.0!

![Template Screenshot](TemplateScreenshot.jpg?raw=true "Template Screenshot")
