var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_CommunityBoards_1 = new ol.format.GeoJSON();
var features_CommunityBoards_1 = format_CommunityBoards_1.readFeatures(json_CommunityBoards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityBoards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityBoards_1.addFeatures(features_CommunityBoards_1);
var lyr_CommunityBoards_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommunityBoards_1, 
                style: style_CommunityBoards_1,
                interactive: true,
                title: '<img src="styles/legend/CommunityBoards_1.png" /> Community Boards'
            });
var format_Bicycle_Routes_2020_2 = new ol.format.GeoJSON();
var features_Bicycle_Routes_2020_2 = format_Bicycle_Routes_2020_2.readFeatures(json_Bicycle_Routes_2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bicycle_Routes_2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bicycle_Routes_2020_2.addFeatures(features_Bicycle_Routes_2020_2);
var lyr_Bicycle_Routes_2020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bicycle_Routes_2020_2, 
                style: style_Bicycle_Routes_2020_2,
                interactive: true,
                title: 'Bicycle_Routes_2020'
            });
var format_NYC_Hospitals_3 = new ol.format.GeoJSON();
var features_NYC_Hospitals_3 = format_NYC_Hospitals_3.readFeatures(json_NYC_Hospitals_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NYC_Hospitals_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NYC_Hospitals_3.addFeatures(features_NYC_Hospitals_3);
var lyr_NYC_Hospitals_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NYC_Hospitals_3, 
                style: style_NYC_Hospitals_3,
                interactive: true,
                title: '<img src="styles/legend/NYC_Hospitals_3.png" /> NYC_Hospitals'
            });
var format_OFNS_FeedingSites_031820_4 = new ol.format.GeoJSON();
var features_OFNS_FeedingSites_031820_4 = format_OFNS_FeedingSites_031820_4.readFeatures(json_OFNS_FeedingSites_031820_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OFNS_FeedingSites_031820_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OFNS_FeedingSites_031820_4.addFeatures(features_OFNS_FeedingSites_031820_4);
var lyr_OFNS_FeedingSites_031820_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OFNS_FeedingSites_031820_4, 
                style: style_OFNS_FeedingSites_031820_4,
                interactive: true,
                title: '<img src="styles/legend/OFNS_FeedingSites_031820_4.png" /> OFNS_FeedingSites_031820'
            });
var format_REC_Locations_031820_5 = new ol.format.GeoJSON();
var features_REC_Locations_031820_5 = format_REC_Locations_031820_5.readFeatures(json_REC_Locations_031820_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REC_Locations_031820_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REC_Locations_031820_5.addFeatures(features_REC_Locations_031820_5);
var lyr_REC_Locations_031820_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REC_Locations_031820_5, 
                style: style_REC_Locations_031820_5,
                interactive: true,
                title: '<img src="styles/legend/REC_Locations_031820_5.png" /> REC_Locations_031820'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_CommunityBoards_1.setVisible(true);lyr_Bicycle_Routes_2020_2.setVisible(true);lyr_NYC_Hospitals_3.setVisible(true);lyr_OFNS_FeedingSites_031820_4.setVisible(true);lyr_REC_Locations_031820_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_CommunityBoards_1,lyr_Bicycle_Routes_2020_2,lyr_NYC_Hospitals_3,lyr_OFNS_FeedingSites_031820_4,lyr_REC_Locations_031820_5];
lyr_CommunityBoards_1.set('fieldAliases', {'qc_id': 'qc_id', 'borocd': 'borocd', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Bicycle_Routes_2020_2.set('fieldAliases', {'qc_id': 'qc_id', 'allclasses': 'allclasses', 'bikedir': 'bikedir', 'boro': 'boro', 'comments': 'comments', 'facilitycl': 'facilitycl', 'fromstreet': 'fromstreet', 'ft_facilit': 'ft_facilit', 'instdate': 'instdate', 'lanecount': 'lanecount', 'moddate': 'moddate', 'onoffst': 'onoffst', 'segmentid': 'segmentid', 'street': 'street', 'tf_facilit': 'tf_facilit', 'tostreet': 'tostreet', });
lyr_NYC_Hospitals_3.set('fieldAliases', {'qc_id': 'qc_id', 'address': 'address', 'addressnum': 'addressnum', 'bbl': 'bbl', 'bin': 'bin', 'boro': 'boro', 'borocode': 'borocode', 'capacity': 'capacity', 'captype': 'captype', 'censtract': 'censtract', 'city': 'city', 'commboard': 'commboard', 'council': 'council', 'datasource': 'datasource', 'facdomain': 'facdomain', 'facgroup': 'facgroup', 'facname': 'facname', 'facsubgrp': 'facsubgrp', 'factype': 'factype', 'latitude': 'latitude', 'longitude': 'longitude', 'nta': 'nta', 'opabbrev': 'opabbrev', 'opname': 'opname', 'optype': 'optype', 'overabbrev': 'overabbrev', 'overagency': 'overagency', 'overlevel': 'overlevel', 'policeprct': 'policeprct', 'proptype': 'proptype', 'schooldist': 'schooldist', 'servarea': 'servarea', 'streetname': 'streetname', 'uid': 'uid', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'zipcode': 'zipcode', });
lyr_OFNS_FeedingSites_031820_4.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemode': 'altitudemode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', 'dist': 'dist', 'bldgcode': 'bldgcode', 'address': 'address', 'zip': 'zip', 'city': 'city', 'type': 'type', 'address_1': 'address_1', 'lat': 'lat', 'lon': 'lon', });
lyr_REC_Locations_031820_5.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemode': 'altitudemode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', 'geographic__district': 'geographic__district', 'building_code': 'building_code', 'address': 'address', 'zip_code': 'zip_code', 'borough': 'borough', 'type': 'type', 'full address': 'full address', 'lat': 'lat', 'lon': 'lon', });
lyr_CommunityBoards_1.set('fieldImages', {'qc_id': '', 'borocd': '', 'shape_leng': '', 'shape_area': '', });
lyr_Bicycle_Routes_2020_2.set('fieldImages', {'qc_id': '', 'allclasses': 'TextEdit', 'bikedir': 'TextEdit', 'boro': 'TextEdit', 'comments': 'TextEdit', 'facilitycl': 'TextEdit', 'fromstreet': 'TextEdit', 'ft_facilit': 'TextEdit', 'instdate': 'TextEdit', 'lanecount': 'TextEdit', 'moddate': 'TextEdit', 'onoffst': 'TextEdit', 'segmentid': 'TextEdit', 'street': 'TextEdit', 'tf_facilit': 'TextEdit', 'tostreet': 'TextEdit', });
lyr_NYC_Hospitals_3.set('fieldImages', {'qc_id': '', 'address': 'TextEdit', 'addressnum': 'TextEdit', 'bbl': 'TextEdit', 'bin': 'TextEdit', 'boro': 'TextEdit', 'borocode': 'TextEdit', 'capacity': 'TextEdit', 'captype': 'TextEdit', 'censtract': 'TextEdit', 'city': 'TextEdit', 'commboard': 'TextEdit', 'council': 'TextEdit', 'datasource': 'TextEdit', 'facdomain': 'TextEdit', 'facgroup': 'TextEdit', 'facname': 'TextEdit', 'facsubgrp': 'TextEdit', 'factype': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nta': 'TextEdit', 'opabbrev': 'TextEdit', 'opname': 'TextEdit', 'optype': 'TextEdit', 'overabbrev': 'TextEdit', 'overagency': 'TextEdit', 'overlevel': 'TextEdit', 'policeprct': 'TextEdit', 'proptype': 'TextEdit', 'schooldist': 'TextEdit', 'servarea': 'TextEdit', 'streetname': 'TextEdit', 'uid': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'zipcode': 'TextEdit', });
lyr_OFNS_FeedingSites_031820_4.set('fieldImages', {'qc_id': '', 'name': '', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudemode': '', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'Range', 'draworder': '', 'icon': 'TextEdit', 'dist': '', 'bldgcode': '', 'address': '', 'zip': '', 'city': '', 'type': '', 'address_1': '', 'lat': '', 'lon': '', });
lyr_REC_Locations_031820_5.set('fieldImages', {'qc_id': '', 'name': '', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudemode': '', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'Range', 'draworder': '', 'icon': 'TextEdit', 'geographic__district': '', 'building_code': '', 'address': '', 'zip_code': '', 'borough': '', 'type': '', 'full address': '', 'lat': '', 'lon': '', });
lyr_CommunityBoards_1.set('fieldLabels', {'qc_id': 'no label', 'borocd': 'inline label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Bicycle_Routes_2020_2.set('fieldLabels', {'qc_id': 'no label', 'allclasses': 'no label', 'bikedir': 'no label', 'boro': 'no label', 'comments': 'no label', 'facilitycl': 'no label', 'fromstreet': 'no label', 'ft_facilit': 'no label', 'instdate': 'no label', 'lanecount': 'no label', 'moddate': 'no label', 'onoffst': 'no label', 'segmentid': 'no label', 'street': 'no label', 'tf_facilit': 'no label', 'tostreet': 'no label', });
lyr_NYC_Hospitals_3.set('fieldLabels', {'qc_id': 'no label', 'address': 'no label', 'addressnum': 'no label', 'bbl': 'no label', 'bin': 'no label', 'boro': 'no label', 'borocode': 'no label', 'capacity': 'no label', 'captype': 'no label', 'censtract': 'no label', 'city': 'no label', 'commboard': 'no label', 'council': 'no label', 'datasource': 'no label', 'facdomain': 'no label', 'facgroup': 'no label', 'facname': 'inline label', 'facsubgrp': 'no label', 'factype': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'nta': 'no label', 'opabbrev': 'no label', 'opname': 'no label', 'optype': 'no label', 'overabbrev': 'no label', 'overagency': 'no label', 'overlevel': 'no label', 'policeprct': 'no label', 'proptype': 'no label', 'schooldist': 'no label', 'servarea': 'no label', 'streetname': 'no label', 'uid': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'zipcode': 'no label', });
lyr_OFNS_FeedingSites_031820_4.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', 'dist': 'no label', 'bldgcode': 'no label', 'address': 'no label', 'zip': 'no label', 'city': 'no label', 'type': 'no label', 'address_1': 'no label', 'lat': 'no label', 'lon': 'no label', });
lyr_REC_Locations_031820_5.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', 'geographic__district': 'no label', 'building_code': 'no label', 'address': 'no label', 'zip_code': 'no label', 'borough': 'no label', 'type': 'no label', 'full address': 'no label', 'lat': 'no label', 'lon': 'no label', });
lyr_REC_Locations_031820_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});