# Oauth using Google

### Request url
```http
https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=profile%20email`
```
- Base url : `https://accounts.google.com/o/oauth2/v2/auth`
- parameter :
    - client_id
    - redirect_uri
    - scope

### Exchange code for token
```http
https://oauth2.googleapis.com/token

```
- body :
     - code
     - client_id
     - client_Secret
     - redirect_uri
     - grant_type

### Get user information
```http
https://www.googleapis.com/oauth2/v2/userinfo

```
- header:
   - Authorization : "Bearer {access_token}"
