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
  if (obj.hasOwnProperty('data')){
    obj.data.psnl_vip_property = {"expiry":"1897017601"}
    obj.data.points = "100000"
    obj.data.ocr_balance = "100000"
    obj.data.pdfword_balance = "100000"
    obj.data.fax_balance = "100000"
    obj.data.login_ocr_balance = "100000"
    obj.data.no_login_ocr_balance = "100000"
    obj.data.bookmode_balance = "100000"
    obj.data.cert_mode_balance = "100000"
    
    obj.data.balance_demoire = "100000"
    obj.data.watchad_vip_chance = "100000"
    obj.data.vip_imagerestore_balance = 100000
    obj.data.CamScanner_Erase = 100000
    obj.data.trans_balance = "100000"
    obj.data.upload_pdf_balance = "100000"
    obj.data.excel_balance = "100000"
    obj.data.patting_balance = "100000"
    obj.data.watermarks_balance = "100000"
    obj.data.pdfword_balance = "100000"
    obj.data.imagerestore_balance = 100000
    obj.data.bookmode_balance = 100000
    
    obj.data.greetcard_list = {
            "greeting_card_2":"100000",
            "greeting_card_3":"100000",
            "greeting_card_4":"100000",
            "greeting_card_5":"100000",
            "greeting_card_6":"100000",
            "greeting_card_9":"100000",
            "greeting_card_10":"100000",
            "greeting_card_11":"100000",
            "CamScanner_PayGreetCard_1":"100000",
            "CamScanner_PayGreetCard_2":"100000",
            "CamScanner_PayGreetCard_3":"100000",
            "CamScanner_PayGreetCard_4":"100000",
            "CamScanner_PayGreetCard_5":"100000",
            "CamScanner_PayGreetCard_6":"100000",
            "CamScanner_NONVIP_PayGreetCard_1":"100000",
            "CamScanner_NONVIP_PayGreetCard_2":"100000",
            "CamScanner_NONVIP_PayGreetCard_3":"100000",
            "greeting_card_1":"100000"
        }
    
     obj.data.points_exchange_cfgrs = {
            "CamScanner_ID_Card_Authenticity":0,
            "CamScanner_ID_Card_Credit":0,
            "CamScanner_CloudCap_1G":0,
            "CamScanner_CertMode":0,
            "CamScanner_Profile_Card_Format":0,
            "CamScanner_Translation":0,
            "CamScanner_Excel":0,
            "CamScanner_Watermarks":0,
            "CamScanner_CloudOCR":0,
            "CamScanner_Pdf2excel":0,
            "CamScanner_Pdf2ppt":0,
            "CamScanner_Sign":0,
            "CamScanner_Pdfword":0,
            "CamScanner_AlbumImport":0
        }
    
    console.log("修改成功")
  } else {
    obj = {"data":{"psnl_vip_property":{"expiry":"4110017601"}}};
  }
} else {
  console.log(typeof obj)
}
$done({body: JSON.stringify(obj)});

