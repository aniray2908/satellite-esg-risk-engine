// ==========================================
// Phase 2 — Carajás Case Study
// Version: v3
// Purpose: Introduce mining-sensitive metric
// Metric: Low NDVI Fraction (<0.2), Jan–Mar seasonal
// Key Learning: Threshold metric increases sensitivity but volatile
// ==========================================

var point = ee.Geometry.Point([-50.4060, -6.0660]);
var buffer = point.buffer(1000);

Map.centerObject(buffer, 12);
Map.addLayer(buffer, {color: 'red'}, '1km Buffer');

var years = ee.List([2019, 2020, 2021, 2022, 2023]);

var computeMetrics = function(year) {
  year = ee.Number(year);

  var startDate = ee.Date.fromYMD(year, 1, 1);
  var endDate = ee.Date.fromYMD(year, 3, 31);

  var collection = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
    .filterBounds(buffer)
    .filterDate(startDate, endDate)
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 80))
    .select(['B4', 'B8']);

  var image = collection.median();
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');

  var lowMask = ndvi.lt(0.2);

  var lowFraction = lowMask.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: buffer,
    scale: 10,
    maxPixels: 1e9
  }).get('NDVI');

  return ee.Feature(null, {
    'year': year,
    'low_ndvi_fraction': lowFraction
  });
};

var results = ee.FeatureCollection(years.map(computeMetrics));

print('v3 — Low NDVI Fraction (Seasonal):', results);
