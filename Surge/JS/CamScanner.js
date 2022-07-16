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
// obj = {"data":{"psnl_vip_property":{"expiry":"1897017600"}},"server_time":"1687017600","pdfword_balance":"9000","login_ocr_balance":"1000","no_login_ocr_balance":"2","cert_mode_balance":9090,"bookmode_balance":29090,"immt_expy_points":"0","points":"1000","CamScanner_RoadMap":"0","used_points":"9090","ocr_balance":11,"fax_balance":"10100"},"ret":"0"};
// obj.data.psnl_vip_property.expiry = "1897017601";
**************************/
console.log($response.body)
let obj = JSON.parse($response.body);
if (typeof obj === 'object') {
  console.log(JSON.stringify(obj))
} else {
  console.log(typeof obj)
}
obj = {"data":{"psnl_vip_property":{"expiry":"1897017601"}}};
$done({body: JSON.stringify(obj)});

