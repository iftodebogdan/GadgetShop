function WriteTopOfPage() {
	document.write('\
		<div id="top-links">\
			<div id="top-links-left"></div>\
			<div id="top-links-middle">\
				\
				<div class="top-links-sep"></div>\
				<a href="index.html">\
					<div class="top-links-item">\
						<div id="top-links-home"></div>\
						Acasa\
					</div>\
				</a>\
				<div class="top-links-sep"></div>\
				\
				<div class="top-links-sep"></div>\
				<a href="shop_bravia.html">\
					<div class="top-links-item">\
						Bravia\
					</div>\
				</a>\
				<div class="top-links-sep"></div>\
				\
				<div class="top-links-sep"></div>\
				<a href="shop_vaio.html">\
					<div class="top-links-item">\
						Vaio\
					</div>\
				</a>\
				<div class="top-links-sep"></div>\
				\
				<div class="top-links-sep"></div>\
				<a href="shop_handycam.html">\
					<div class="top-links-item">\
						Handycam\
					</div>\
				</a>\
				<div class="top-links-sep"></div>\
				\
				<div class="top-links-sep"></div>\
				<a href="shop_cyber-shot.html">\
					<div class="top-links-item">\
						Cyber-shot\
					</div>\
				</a>\
				<div class="top-links-sep"></div>\
				\
				<div class="top-links-sep"></div>\
				<a href="shop_alpha.html">\
					<div class="top-links-item">\
						Alpha\
					</div>\
				</a>\
				<div class="top-links-sep"></div>\
				\
				<div class="top-links-sep"></div>\
				<a href="shop_walkman.html">\
					<div class="top-links-item">\
						Walkman\
					</div>\
				</a>\
				<div class="top-links-sep"></div>\
				\
				<div class="top-links-sep"></div>\
				<a href="shop_x-plod.html">\
					<div class="top-links-item">\
						X-plod\
					</div>\
				</a>\
				<div class="top-links-sep"></div>\
				\
				<div class="top-links-sep"></div>\
				<a href="shop_playstation.html">\
					<div class="top-links-item">\
						PlayStation\
					</div>\
				</a>\
				<div class="top-links-sep"></div>\
				\
				<div class="top-links-sep" style="float:right"></div>\
				<a href="contact.html">\
					<div class="top-links-item" style="float:right">\
						Contact\
					</div>\
				</a>\
				<div class="top-links-sep" style="float:right"></div>\
				\
			</div>\
			<div id="top-links-right"></div>\
			\
		</div>\
		<div id="logo">\
			<table border="0" style="text-align:center;float:right;margin-right:50px;">\
				<tr>\
					<td>\
						<a href="managecart.html"><img src="img/cart.gif"></img></a>\
					</td>\
					<td>\
						<a href="managecart.html">Cosul meu</a>\
					</td>\
				</tr>\
			</table>\
		</div>\
		\
		<div id="main-header"></div>\
	');
}

function WriteBottomOfPage() {
	document.write('\
		<div id="main-footer"></div>\
		\
		<br>\
		<center>\
			<a href="index.html">Acasa</a> | \
			<a href="shop_bravia.html">Bravia</a> | \
			<a href="shop_vaio.html">Vaio</a> | \
			<a href="shop_handycam.html">Handycam</a> | \
			<a href="shop_cyber-shot.html">Cyber-shot</a> | \
			<a href="shop_alpha.html">Alpha</a> | \
			<a href="shop_walkman.html">Walkman</a> | \
			<a href="shop_x-plod.html">X-plod</a> | \
			<a href="shop_playstation.html">PlayStation</a> | \
			<a href="contact.html">Contact</a>\
			<br>\
			Copyright © 2011. Toate drepturile rezervate gadgetshop.ro\
			<br>\
		</center>\
	');
}

function WriteProducts(PathToXMLFile) {
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET",PathToXMLFile,false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 

	document.write('\
		<div id="main-center"><br>\
	');
	
	var x = xmlDoc.getElementsByTagName("Item");
	for (i=0;i<x.length;i++) {
		document.write('\
				<table border=0 class="product">\
					<tr>\
						<td class="img" rowspan="2">\
							<img src="\
		');
		document.write(x[i].getElementsByTagName("ImagePath")[0].childNodes[0].nodeValue);
		document.write('"></img>\
						</td>\
						<td class="description">\
							<h3>\
		');
		document.write(x[i].getElementsByTagName("Family")[0].childNodes[0].nodeValue + " " + x[i].getElementsByTagName("Model")[0].childNodes[0].nodeValue);
		document.write('</h3>\
						\
		');
		document.write(x[i].getElementsByTagName("Description")[0].childNodes[0].nodeValue);
		document.write('\
					</td>\
				</tr>\
				<tr>\
					<td class="description">\
						<span style="float:left">\
		');
		document.write(x[i].getElementsByTagName("Price")[0].childNodes[0].nodeValue);
		document.write(' RON</span>\
						<FORM NAME=order style="float:right">\
						<input type=hidden name="PRICE" value="\
		');
		document.write(x[i].getElementsByTagName("Price")[0].childNodes[0].nodeValue);
		document.write('">\
						<input type=hidden name="NAME" value="\
		');
		document.write(x[i].getElementsByTagName("Family")[0].childNodes[0].nodeValue);
		document.write('">\
						<input type=hidden name="ID_NUM" value="\
		');
		document.write(x[i].getElementsByTagName("Model")[0].childNodes[0].nodeValue);
		document.write('">\
						<input type=button value=\'  Pune in cos  \' onClick=\'AddToCart(this.form)\'>\
						</FORM>\
					</td>\
				</tr>\
			</table>\
			<br><br>\
		');
	}
	document.write('\
		</div>\
	');
}