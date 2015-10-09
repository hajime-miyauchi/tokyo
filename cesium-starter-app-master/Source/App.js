var viewer = new Cesium.Viewer('cesiumContainer');

//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load('http://hajime-miyauchi.github.io/tokyo/cesium-starter-app-master/Source/nagoya2shibuya.kml'));

//視点の変更
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(138.384155, 35.056608, 1500000.0)});

var entities = viewer.entities;

entities.add({
        position : Cesium.Cartesian3.fromDegrees(136.882533, 35.171112),
        point : {
            pixelSize : 10,
            color : Cesium.Color.YELLOW
    }
});

var point2 = viewer.entities;

entities.add({
        position : Cesium.Cartesian3.fromDegrees(139.701850, 35.658252),
        point : {
            pixelSize : 10,
            color : Cesium.Color.YELLOW
    }
});
