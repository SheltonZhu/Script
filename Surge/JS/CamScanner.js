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
http-response https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

[MITM]
hostname = ap*.intsig.net

***************************
Quantumult:  

[REWRITE]
https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url simple-response SFRUUC8xLjEgMjAwIE9LCgp7CiAiZGF0YSI6IHsKICAicHNubF92aXBfcHJvcGVydHkiOiB7CiAgICJleHBpcnkiOiAiMTY0MzczMTIwMCIKICB9CiB9Cn0=

[MITM]
hostname = ap*.intsig.net

**************************/
console.log("GET response: " + $response.body)
let obj = JSON.parse($response.body);
if (typeof obj === 'object') {
  console.log(JSON.stringify(obj))
  if (obj.hasOwnProperty('data')){
    obj.data.psnl_vip_property = {"expiry":"1897017601"}
    obj.data.points = "1000"
    obj.data.ocr_balance = "1000"
    obj.data.pdfword_balance = "1000"
    obj.data.fax_balance = "1000"
    obj.data.login_ocr_balance = "1000"
    obj.data.no_login_ocr_balance = "1000"
    obj.data.bookmode_balance = "1000"
    obj.data.cert_mode_balance = "1000"
    console.log("修改成功")
  } else {
    obj = {"data":{"psnl_vip_property":{"expiry":"1897017601"}}};
  }
} else {
  console.log(typeof obj)
}
$done({body: JSON.stringify(obj)});

