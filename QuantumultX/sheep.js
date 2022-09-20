/*
羊了个羊 通关

***************************
Quantumult X:

[rewrite_local]
^https:\/\/cat-match.easygame2021\.com\/sheep\/v1\/game\/map_info_ex\? url script-response-body https://raw.githubusercontent.com/SheltonZhu/Script/master/QuantumultX/sheep.js

[mitm]
hostname = cat-match.easygame2021.com

**************************/
let obj = JSON.parse($response.body);
console.log($response.body)
if (typeof obj === 'object') {
  obj.data.map_md5[1] = obj.data.map_md5[0];
}
$done({body: JSON.stringify(obj)});
