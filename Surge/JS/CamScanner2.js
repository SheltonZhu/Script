/*
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

[mitm]
hostname = ap*.intsig.net

***************************
Surge4 or Loon:

[Script]
http-response https:\/\/v3\.camscanner\.com\/app\/getPrivilegeItem requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/SheltonZhu/Script/master/Surge/JS/CamScanner2.js
[MITM]
hostname = ap*.intsig.net

***************************
Quantumult:  

[REWRITE]
https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url simple-response SFRUUC8xLjEgMjAwIE9LCgp7CiAiZGF0YSI6IHsKICAicHNubF92aXBfcHJvcGVydHkiOiB7CiAgICJleHBpcnkiOiAiMTY0MzczMTIwMCIKICB9CiB9Cn0=

[MITM]
hostname = ap*.intsig.net

**************************/
let obj = JSON.parse($response.body);
if (typeof obj === 'object') {
  if (obj.hasOwnProperty('data')){

  } else {
    console.log($response.body)
  }
} else {
  console.log(typeof obj)
  console.log($response.body)
}
$done({body: JSON.stringify(obj)});
