Jsdxss
======

DOMXSS Filter Based on javascript

Usage: 

<div id="target"></div>
<script src="jsdxss.js"></script>
<script>
var html = "HTML CODE";
(new Jsdxss()).filter(html, "target");
</script>

So you can show the filtered html code on div#target
过滤完成后的代码输出在id为target的元素中。

Example: http://phith0n.github.io/Jsdxss/test.html
你可以在这里测试DOM XSS过滤效果。
