ip和mac地址格式填报校验
2016年11月29日 09:59:03
阅读数：863
增加校验，支持对IP和MAC地址的校验：

校验函数如下：

<SCRIPT LANGUAGE=”JavaScript”>

<!–

function isIP(strIP)

{

//if (isNull(strIP)) return false;

var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式

if(re.test(strIP))

{

if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;

}

alert(“IP地址格式不对!，只能输入数字和“.”,格式为XXX.XXX.XXX.XXX 例如：192.168.0.1″);

return true;

}

function isMac(macaddr)

{

   var reg1 = /^[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}$/;

   var reg2 = /^[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}$/;

   if (reg1.test(macaddr)) {

      return true;

   } else if (reg2.test(macaddr)) {

      return true;

   } else {

                alert(“你输入的MAC地址不正确。”); return true;

   }

}

</SCRIPT>

在校验中使用即时校验。