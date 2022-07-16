/*
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https:\/\/v3\.camscanner\.com\/app\/getPrivilegeItem url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner2.js

[mitm]
hostname = v3.camscanner.com

**************************/
let obj = JSON.parse($response.body);
if (typeof obj === 'object') {
  if (obj.hasOwnProperty('data')){
    obj = {
    "data":{
        "data":{
            "scaner":[
                {
                    "item":"CamScanner_ImageRestore",
                    "balance":100000
                },
                {
                    "item":"CamScanner_Patting",
                    "balance":100000
                },
                {
                    "item":"CamScanner_Profile_Card_Format",
                    "balance":100000
                },
                {
                    "item":"CamScanner_BookMode",
                    "balance":100000
                },
                {
                    "item":"CamScanner_CertMode",
                    "balance":100000
                },
                {
                    "item":"CamScanner_HDScan",
                    "balance":100000
                }
            ],
            "document":[
                {
                    "item":"CamScanner_Pic2pdf",
                    "balance":100000
                },
                {
                    "item":"CamScanner_PdfCompress",
                    "balance":100000
                },
                {
                    "item":"CamScanner_PdfEncrypt",
                    "balance":100000
                },
                {
                    "item":"CamScanner_FileMerge",
                    "balance":100000
                },
                {
                    "item":"CamScanner_PdfExtract",
                    "balance":100000
                },
                {
                    "item":"CamScanner_PdfWatermark",
                    "balance":100000
                },
                {
                    "item":"CamScanner_PdfSign",
                    "balance":100000
                }
            ],
            "transfer":[
                {
                    "item":"CamScanner_ExcelRecoginze",
                    "balance":100000
                },
                {
                    "item":"CamScanner_RoadMap",
                    "balance":0
                },
                {
                    "item":"CamScanner_Pdf2ppt",
                    "balance":100000
                },
                {
                    "item":"CamScanner_CloudOCR",
                    "balance":100000
                }
            ],
            "other":[
                {
                    "item":"CamScanner_Translation",
                    "balance":100000
                },
                {
                    "item":"CamScanner_DirNum",
                    "balance":100000
                },
                {
                    "item":"CamScanner_IP_REMOVEAD",
                    "balance":100000
                },
                {
                    "item":"CamScanner_PingTu",
                    "balance":100000
                },
                {
                    "item":"CamScanner_Points",
                    "balance":100000
                },
                {
                    "item":"CamScanner_Fax_Balance",
                    "balance":100000
                }
            ]
        },
        "err":"",
        "ret":0
    }
}
  } else {
    console.log($response.body)
  }
} else {
  console.log(typeof obj)
  console.log($response.body)
}
$done({body: JSON.stringify(obj)});
