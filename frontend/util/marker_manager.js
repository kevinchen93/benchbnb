export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(benches) {
    console.log('Updating...');
    const benchesObj = {};
    benches.forEach(bench => benchesObj[bench.id] = bench);

    benches.filter(bench => !this.markers[bench.id])
           .forEach(newBench => this.createMarkerFromBench(newBench, this.handleClick))

    Object.keys(this.markers)
           .filter(benchId => !benchesObj[benchId])
           .forEach((benchId) => this.removeMarker(this.markers[benchId]));

    console.log(this.markers);
  }

  createMarkerFromBench(bench) {
    const benchPos = new google.maps.LatLng(bench.lat, bench.lng);
    const newMarker = new google.maps.Marker({
      position: benchPos,
      title: bench.title
    });
    newMarker.setMap(this.map);
  }

  removeMarker(marker) {
    this.markers[marker.benchId].setMap(null);
    delete this.markers[marker.benchId];
  }
}