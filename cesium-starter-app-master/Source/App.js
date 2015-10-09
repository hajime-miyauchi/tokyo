var viewer = new Cesium.Viewer('cesiumContainer');

//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load('http://hajime-miyauchi.github.io/tokyo/cesium-starter-app-master/Source/nagoya2shibuya.kml'));

//視点の変更
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(138.384155, 35.056608, 150000.0)});
