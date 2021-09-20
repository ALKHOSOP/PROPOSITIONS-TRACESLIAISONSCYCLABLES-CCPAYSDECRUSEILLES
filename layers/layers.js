var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_POLESSTRUCTURANTS_1 = new ol.format.GeoJSON();
var features_POLESSTRUCTURANTS_1 = format_POLESSTRUCTURANTS_1.readFeatures(json_POLESSTRUCTURANTS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLESSTRUCTURANTS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLESSTRUCTURANTS_1.addFeatures(features_POLESSTRUCTURANTS_1);
var lyr_POLESSTRUCTURANTS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLESSTRUCTURANTS_1, 
                style: style_POLESSTRUCTURANTS_1,
                interactive: true,
                title: '<img src="styles/legend/POLESSTRUCTURANTS_1.png" /> POLES STRUCTURANTS'
            });
var format_STATIONNEMENTSVELOEXISTANTS_2 = new ol.format.GeoJSON();
var features_STATIONNEMENTSVELOEXISTANTS_2 = format_STATIONNEMENTSVELOEXISTANTS_2.readFeatures(json_STATIONNEMENTSVELOEXISTANTS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STATIONNEMENTSVELOEXISTANTS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STATIONNEMENTSVELOEXISTANTS_2.addFeatures(features_STATIONNEMENTSVELOEXISTANTS_2);
var lyr_STATIONNEMENTSVELOEXISTANTS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STATIONNEMENTSVELOEXISTANTS_2, 
                style: style_STATIONNEMENTSVELOEXISTANTS_2,
                interactive: true,
                title: '<img src="styles/legend/STATIONNEMENTSVELOEXISTANTS_2.png" /> STATIONNEMENTS VELO EXISTANTS'
            });
var format_AMENAGEMENTSCYCLABLESEXISTANTS_3 = new ol.format.GeoJSON();
var features_AMENAGEMENTSCYCLABLESEXISTANTS_3 = format_AMENAGEMENTSCYCLABLESEXISTANTS_3.readFeatures(json_AMENAGEMENTSCYCLABLESEXISTANTS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMENAGEMENTSCYCLABLESEXISTANTS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMENAGEMENTSCYCLABLESEXISTANTS_3.addFeatures(features_AMENAGEMENTSCYCLABLESEXISTANTS_3);
var lyr_AMENAGEMENTSCYCLABLESEXISTANTS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AMENAGEMENTSCYCLABLESEXISTANTS_3, 
                style: style_AMENAGEMENTSCYCLABLESEXISTANTS_3,
                interactive: true,
                title: '<img src="styles/legend/AMENAGEMENTSCYCLABLESEXISTANTS_3.png" /> AMENAGEMENTS CYCLABLES EXISTANTS'
            });
var format_PROPOSITIONSGARAGES20VELOS_4 = new ol.format.GeoJSON();
var features_PROPOSITIONSGARAGES20VELOS_4 = format_PROPOSITIONSGARAGES20VELOS_4.readFeatures(json_PROPOSITIONSGARAGES20VELOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROPOSITIONSGARAGES20VELOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROPOSITIONSGARAGES20VELOS_4.addFeatures(features_PROPOSITIONSGARAGES20VELOS_4);
var lyr_PROPOSITIONSGARAGES20VELOS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROPOSITIONSGARAGES20VELOS_4, 
                style: style_PROPOSITIONSGARAGES20VELOS_4,
                interactive: true,
                title: '<img src="styles/legend/PROPOSITIONSGARAGES20VELOS_4.png" /> PROPOSITIONS GARAGES 20 VELOS '
            });
var format_PROPOSITIONSTRACESLIAISONSCYCLABLES_5 = new ol.format.GeoJSON();
var features_PROPOSITIONSTRACESLIAISONSCYCLABLES_5 = format_PROPOSITIONSTRACESLIAISONSCYCLABLES_5.readFeatures(json_PROPOSITIONSTRACESLIAISONSCYCLABLES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROPOSITIONSTRACESLIAISONSCYCLABLES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROPOSITIONSTRACESLIAISONSCYCLABLES_5.addFeatures(features_PROPOSITIONSTRACESLIAISONSCYCLABLES_5);
var lyr_PROPOSITIONSTRACESLIAISONSCYCLABLES_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROPOSITIONSTRACESLIAISONSCYCLABLES_5, 
                style: style_PROPOSITIONSTRACESLIAISONSCYCLABLES_5,
                interactive: true,
    title: 'PROPOSITIONS TRACES LIAISONS CYCLABLES<br />\
    <img src="styles/legend/PROPOSITIONSTRACESLIAISONSCYCLABLES_5_0.png" /> TRACE ALTERNATIF<br />\
    <img src="styles/legend/PROPOSITIONSTRACESLIAISONSCYCLABLES_5_1.png" /> TRACE DE BASE<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_POLESSTRUCTURANTS_1.setVisible(true);lyr_STATIONNEMENTSVELOEXISTANTS_2.setVisible(true);lyr_AMENAGEMENTSCYCLABLESEXISTANTS_3.setVisible(true);lyr_PROPOSITIONSGARAGES20VELOS_4.setVisible(true);lyr_PROPOSITIONSTRACESLIAISONSCYCLABLES_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_POLESSTRUCTURANTS_1,lyr_STATIONNEMENTSVELOEXISTANTS_2,lyr_AMENAGEMENTSCYCLABLESEXISTANTS_3,lyr_PROPOSITIONSGARAGES20VELOS_4,lyr_PROPOSITIONSTRACESLIAISONSCYCLABLES_5];
lyr_POLESSTRUCTURANTS_1.set('fieldAliases', {'NOM': 'NOM', 'TYPE': 'TYPE', });
lyr_STATIONNEMENTSVELOEXISTANTS_2.set('fieldAliases', {'ID': 'ID', 'PHOTO': 'PHOTO', 'COMMUNE': 'COMMUNE', 'TYPE_AMGT': 'TYPE_AMGT', 'REMARQUE': 'REMARQUE', 'EXIST_PRO': 'EXIST_PRO', 'TYPE_DETAI': 'TYPE_DETAI', 'CAPACITE': 'CAPACITE', });
lyr_AMENAGEMENTSCYCLABLESEXISTANTS_3.set('fieldAliases', {'ID': 'ID', 'PHOTO': 'PHOTO', 'COMMUNE': 'COMMUNE', 'TYPE_AMGT': 'TYPE_AMGT', 'SIGNAPOLIC': 'SIGNAPOLIC', 'SIGNAJALON': 'SIGNAJALON', 'DIRECTION': 'DIRECTION', 'LINEAIREml': 'LINEAIREml', 'TYPE_REVET': 'TYPE_REVET', 'PRATIQUABI': 'PRATIQUABI', 'ETAT_AMGT': 'ETAT_AMGT', 'REMARQUE': 'REMARQUE', });
lyr_PROPOSITIONSGARAGES20VELOS_4.set('fieldAliases', {'ID': 'ID', 'COMMUNE': 'COMMUNE', 'POLE': 'POLE', 'TYPEEQUIPT': 'TYPEEQUIPT', 'TYPEDETAIL': 'TYPEDETAIL', 'CAPACITE': 'CAPACITE', 'EXIST_PRO': 'EXIST_PRO', 'REMARQUE': 'REMARQUE', });
lyr_PROPOSITIONSTRACESLIAISONSCYCLABLES_5.set('fieldAliases', {'id': 'id', 'LIAISON': 'LIAISON', 'SECTION': 'SECTION', 'EMPRISE': 'EMPRISE', 'REMARQUE': 'REMARQUE', 'AMGT_PRECO': 'AMGT_PRECO', 'PROPO': 'PROPO', });
lyr_POLESSTRUCTURANTS_1.set('fieldImages', {'NOM': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_STATIONNEMENTSVELOEXISTANTS_2.set('fieldImages', {'ID': 'TextEdit', 'PHOTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE_AMGT': 'TextEdit', 'REMARQUE': 'TextEdit', 'EXIST_PRO': 'TextEdit', 'TYPE_DETAI': 'TextEdit', 'CAPACITE': 'TextEdit', });
lyr_AMENAGEMENTSCYCLABLESEXISTANTS_3.set('fieldImages', {'ID': 'TextEdit', 'PHOTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE_AMGT': 'TextEdit', 'SIGNAPOLIC': 'TextEdit', 'SIGNAJALON': 'TextEdit', 'DIRECTION': 'TextEdit', 'LINEAIREml': 'TextEdit', 'TYPE_REVET': 'TextEdit', 'PRATIQUABI': 'TextEdit', 'ETAT_AMGT': 'TextEdit', 'REMARQUE': 'TextEdit', });
lyr_PROPOSITIONSGARAGES20VELOS_4.set('fieldImages', {'ID': 'TextEdit', 'COMMUNE': 'TextEdit', 'POLE': 'TextEdit', 'TYPEEQUIPT': 'TextEdit', 'TYPEDETAIL': 'TextEdit', 'CAPACITE': 'Range', 'EXIST_PRO': 'TextEdit', 'REMARQUE': 'TextEdit', });
lyr_PROPOSITIONSTRACESLIAISONSCYCLABLES_5.set('fieldImages', {'id': 'TextEdit', 'LIAISON': 'TextEdit', 'SECTION': 'TextEdit', 'EMPRISE': 'TextEdit', 'REMARQUE': 'TextEdit', 'AMGT_PRECO': 'TextEdit', 'PROPO': 'TextEdit', });
lyr_POLESSTRUCTURANTS_1.set('fieldLabels', {'NOM': 'inline label', 'TYPE': 'inline label', });
lyr_STATIONNEMENTSVELOEXISTANTS_2.set('fieldLabels', {'ID': 'inline label', 'PHOTO': 'inline label', 'COMMUNE': 'inline label', 'TYPE_AMGT': 'inline label', 'REMARQUE': 'inline label', 'EXIST_PRO': 'inline label', 'TYPE_DETAI': 'inline label', 'CAPACITE': 'inline label', });
lyr_AMENAGEMENTSCYCLABLESEXISTANTS_3.set('fieldLabels', {'ID': 'inline label', 'PHOTO': 'inline label', 'COMMUNE': 'inline label', 'TYPE_AMGT': 'inline label', 'SIGNAPOLIC': 'inline label', 'SIGNAJALON': 'inline label', 'DIRECTION': 'inline label', 'LINEAIREml': 'inline label', 'TYPE_REVET': 'inline label', 'PRATIQUABI': 'inline label', 'ETAT_AMGT': 'inline label', 'REMARQUE': 'inline label', });
lyr_PROPOSITIONSGARAGES20VELOS_4.set('fieldLabels', {'ID': 'inline label', 'COMMUNE': 'inline label', 'POLE': 'inline label', 'TYPEEQUIPT': 'inline label', 'TYPEDETAIL': 'inline label', 'CAPACITE': 'inline label', 'EXIST_PRO': 'inline label', 'REMARQUE': 'inline label', });
lyr_PROPOSITIONSTRACESLIAISONSCYCLABLES_5.set('fieldLabels', {'id': 'inline label', 'LIAISON': 'inline label', 'SECTION': 'inline label', 'EMPRISE': 'inline label', 'REMARQUE': 'inline label', 'AMGT_PRECO': 'inline label', 'PROPO': 'inline label', });
lyr_PROPOSITIONSTRACESLIAISONSCYCLABLES_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});