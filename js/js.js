﻿window.onload = function () {
	var aDates = [
	'春江潮水连海平',
	'海上明月共潮生',
	'滟滟随波千万里',
	'何处春江无月明',
	'江流宛转绕芳甸',
	'月照花林皆似霰',
	'空里流霜不觉飞',
	'汀上白沙看不见',
	'江天一色无纤尘',
	'皎皎空中孤月轮',
	'江畔何人初见月',
	'江月何年初照人',
	]
	var aLi = document.getElementById('calendar').getElementsByTagName('li');
	var oBox = document.getElementById('box');
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onmouseover = function () {
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].className= '';
		 	}
			this.className= 'active';
			oBox.innerHTML = '<h3>' + (this.index + 1) + '月活动</h3><p>' + aDates[this.index] + '</p>';
		}
	}
}
