var random_images_array = 
[
"404-1.png", 
"404-2.png", 
];

var num = Math.floor( Math.random() * random_images_array.length );
var img = random_images_array[ num ];
var imgStr = '<img src="' + path + img + '">';

document.write(imgStr); document.close();
