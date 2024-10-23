var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps:',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_32_1 = new ol.format.GeoJSON();
var features_32_1 = format_32_1.readFeatures(json_32_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_32_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_32_1.addFeatures(features_32_1);
var lyr_32_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_32_1, 
                style: style_32_1,
                popuplayertitle: "3 วัน 2 คืน",
                interactive: true,
                title: '<img src="styles/legend/32_1.png" /> 3 วัน 2 คืน'
            });
var format_21_2 = new ol.format.GeoJSON();
var features_21_2 = format_21_2.readFeatures(json_21_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_21_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_21_2.addFeatures(features_21_2);
var lyr_21_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_21_2, 
                style: style_21_2,
                popuplayertitle: "2 วัน 1 คืน",
                interactive: true,
                title: '<img src="styles/legend/21_2.png" /> 2 วัน 1 คืน'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "วันเดียว เที่ยวสุดคุ้ม",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> วันเดียว เที่ยวสุดคุ้ม'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_32_1.setVisible(true);lyr_21_2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_32_1,lyr_21_2,lyr__3];
lyr_32_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_21_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr__3.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_32_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_21_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_32_1.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr_21_2.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr__3.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});