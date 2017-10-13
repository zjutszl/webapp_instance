var jpgList =[
		{
			name: '朋克蒸汽工厂',
			path : './images/1.jpg',
			description:'this is the description'
		},
		{
			name: 'Enter',
			path : './images/2.jpg',
			description:'this is the description'
		},
		{
			name: '众星',
			path : './images/3.jpg',
			description:'this is the description'
		},
		{
			name: '夕阳，海鸟',
			path : './images/4.jpg',
			description:'this is the description'
		},
		{
			name: '油画',
			path : './images/5.jpg',
			description:'this is the description'
		}
	];
	new Vue({
		el:'#app',
		data : {
		  jpgList : jpgList
		}
	});