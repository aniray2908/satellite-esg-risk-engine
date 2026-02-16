// ==========================================
// Phase 2 — Carajás Case Study
// Version: v2
// Purpose: Reduced buffer to 1km
// Metric: Mean NDVI (Jan–Mar seasonal)
// Key Learning: Buffer sensitivity affects signal
// ==========================================

var point = ee.Geometry.Point([-50.4060, -6.0660]);
var buffer = point.buffer(1000);

Map.centerObject(buffer, 12);
Map.addLayer(buffer, {color: 'red'}, '1km Buffer');

var years = ee.List([2019, 2020, 2021, 2022, 2023]);

var computeNDVI = function(year) {
  year = ee.Number(year);

  var startDate = ee.Date.fromYMD(year, 1, 1);
  var endDate = ee.Date.fromYMD(year, 3, 31);

  var collection = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
    .filterBounds(buffer)
    .filterDate(startDate, endDate)
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 60))
    .select(['B4', 'B8']);

  var image = collection.median();
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');

  var meanNDVI = ndvi.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: buffer,
    scale: 10,
    maxPixels: 1e9
  }).get('NDVI');

  return ee.Feature(null, {
    'year': year,
    'mean_ndvi': meanNDVI
  });
};

var results = ee.FeatureCollection(years.map(computeNDVI));

print('v2 — Mean NDVI (1km, Jan–Mar):', results);
