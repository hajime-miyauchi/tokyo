var viewer = new Cesium.Viewer('cesiumContainer');

//ポイントを追加
var point = viewer.entities;

point.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        point : {
            pixelSize : 10,
            color : Cesium.Color.YELLOW
    }
});

//ポイントを追加
var point2 = viewer.entities;

point2.add({
        position : Cesium.Cartesian3.fromDegrees(-65.59777, 40.03883),
        point : {
            pixelSize : 10,
            color : Cesium.Color.BLUE
    }
});

//ラインを追加
var line1 = viewer.entities;

line1.add({
    name : 'Red line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([-75, 35,
                                                        -125, 35]),
        width : 5,
        material : Cesium.Color.RED
    }
});


//ポリゴンを追加
var Polygon = viewer.entities;

Polygon.add({
    name : 'Polygon',
    polygon : {
        hierarchy : Cesium.Cartesian3.fromDegreesArray([-108.0, 42.0,
                                                        -100.0, 42.0,
                                                        -104.0, 40.0]),
        extrudedHeight: 500000.0,
	material : Cesium.Color.GREEN
    }
});
