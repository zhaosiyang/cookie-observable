# Cookie Observable
Read cookie as an observable

### Install
```npm install cookie-observable```

### Use (Choose either one)
**1. observable**
```javascript
getCookieObservable().subscribe(cookie => console.log(cookie));
```
**2. callback**
```javascript
cookieOnChange(cookie => console.log(cookie));
```




