ip��mac��ַ��ʽ�У��
2016��11��29�� 09:59:03
�Ķ�����863
����У�飬֧�ֶ�IP��MAC��ַ��У�飺

У�麯�����£�

<SCRIPT LANGUAGE=��JavaScript��>

<!�C

function isIP(strIP)

{

//if (isNull(strIP)) return false;

var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //ƥ��IP��ַ��������ʽ

if(re.test(strIP))

{

if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;

}

alert(��IP��ַ��ʽ����!��ֻ���������ֺ͡�.��,��ʽΪXXX.XXX.XXX.XXX ���磺192.168.0.1��);

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

                alert(���������MAC��ַ����ȷ����); return true;

   }

}

</SCRIPT>

��У����ʹ�ü�ʱУ�顣