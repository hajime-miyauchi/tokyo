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
