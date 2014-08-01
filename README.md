Jsdxss
======

DOMXSS Filter Based on javascript

Usage: 

&lt;div id=&quot;target&quot;&gt;&lt;/div&gt;

&lt;script src=&quot;jsdxss.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;

var html = &quot;HTML CODE&quot;;

(new Jsdxss()).filter(html, &quot;target&quot;);

&lt;/script&gt;

So you can show the filtered html code on div#target

过滤完成后的代码输出在id为target的元素中。

Example: http://phith0n.github.io/Jsdxss/test.html

你可以在这里测试DOM XSS过滤效果。
