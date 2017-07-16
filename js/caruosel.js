var data_urls = '{"data":[{"eventId":"Test01","productId":"P_Test01","documentId":9,"fields":[{"NAME":"123"},{"PICTURE":"59649f82c743a.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":10,"fields":[{"NAME":"123"},{"PICTURE":"59649f9a823ec.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":11,"fields":[{"NAME":"123"},{"PICTURE":"59649fa88979b.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":12,"fields":[{"NAME":"123"},{"PICTURE":"59649fcc5e48a.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":13,"fields":[{"NAME":"123"},{"PICTURE":"5964a01cef916.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":14,"fields":[{"NAME":"123"},{"PICTURE":"5964a70badaf5.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":15,"fields":[{"NAME":"123"},{"PICTURE":"5964a76f85c89.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":16,"fields":[{"NAME":"123"},{"PICTURE":"5964a790d694e.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":17,"fields":[{"NAME":"123"},{"PICTURE":"5964a7b98b0f6.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":18,"fields":[{"NAME":"123"},{"PICTURE":"5964a806a1732.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":19,"fields":[{"NAME":"123"},{"PICTURE":"5964a8fec7495.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":20,"fields":[{"NAME":"123"},{"PICTURE":"5964a97a88fa5.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":21,"fields":[{"NAME":"123"},{"PICTURE":"5964a9a82dc59.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":22,"fields":[{"NAME":"123"},{"PICTURE":"5964aa2781c4a.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":23,"fields":[{"NAME":"123"},{"PICTURE":"5964aaed31f5e.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":24,"fields":[{"NAME":"123"},{"PICTURE":"5964ab1368551.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":25,"fields":[{"NAME":"123"},{"PICTURE":"5964ab32ae213.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":26,"fields":[{"NAME":"123"},{"PICTURE":"5964ab343db76.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":27,"fields":[{"NAME":"123"},{"PICTURE":"5964ab55a0d3c.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":28,"fields":[{"NAME":"123"},{"PICTURE":"5964ab8386b59.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":29,"fields":[{"NAME":"123"},{"PICTURE":"5964ab990ed5f.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":61,"fields":[{"NAME":"123"},{"PICTURE":"5964b66b1e6da.jpeg"}]},{"eventId":"Test01","productId":"P_Test01","documentId":62,"fields":[{"NAME":"New Name"},{"PICTURE":"5964b8f12230f.jpeg"}]}]}';
var parsedObjectsData = JSON.parse(data_urls);
var arrayObjectData = [];
var baseURL= 'http://dev-carousel.virtlabs.cn:8080/'
for(var x in parsedObjectsData){
    arrayObjectData.push(parsedObjectsData[x]);
}

// Get PICTURE and documentId to URL
function makeUrl(arrayObjectData, baseURL){
    var arrayUrls = [];
    theLenght = arrayObjectData[0].length;
    for (var i=0; i < theLenght; i++  ){
        urlAux = baseURL + "document/" + 
                arrayObjectData[0][i]["documentId"] + "/resource/" +
                arrayObjectData[0][i]["fields"][1]["PICTURE"];
        arrayUrls.push(urlAux);    
    }
    return arrayUrls;
}

//m = makeUrl(arrayObjectData, baseURL);


var m = ['images/pasted1.png', 'images/pasted2.png', 'images/pasted3.png', 'images/pasted4.png'];
$(document).ready(function(){  
    for(var i=0 ; i< m.length ; i++) {
        $('<div class="item item' + i +'"><img src="'+m[i]+'"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
        $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
    }
    $('.item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#carousel-example-generic').carousel();
});

