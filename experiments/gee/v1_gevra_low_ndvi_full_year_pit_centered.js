// ==========================================
// Phase 3 — Gevra Coal Mine (India)
// Version: v1
// Purpose: Cross-site generalization test
// Metric: Mean NDVI + Low NDVI Fraction (< 0.2)
// Composite: Full-Year Median (2019–2023)
// Spatial: 1 km pit-centered buffer
// ==========================================

// Pit-centered coordinate (verified visually)
var point = ee.Geometry.Point([82.55781150434132, 22.334719881891232]);

// 1 km buffer
var buffer = point.buffer(1000);

Map.centerObject(buffer, 13);
Map.addLayer(buffer, {color: 'red'}, '1km Buffer');

var years = ee.List([2019, 2020, 2021, 2022, 2023]);

var computeMetrics = function(year) {
  year = ee.Number(year);

  var startDate = ee.Date.fromYMD(year, 1, 1);
  var endDate = ee.Date.fromYMD(year, 12, 31);

  var collection = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
    .filterBounds(buffer)
    .filterDate(startDate, endDate)
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 80))
    .select(['B4', 'B8']);

  var image = collection.median();

  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');

  // Mean NDVI
  var meanNDVI = ndvi.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: buffer,
    scale: 10,
    maxPixels: 1e9
  }).get('NDVI');

  // Low NDVI mask (< 0.2)
  var lowMask = ndvi.lt(0.2);

  var lowFraction = lowMask.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: buffer,
    scale: 10,
    maxPixels: 1e9
  }).get('NDVI');

  return ee.Feature(null, {
    'year': year,
    'mean_ndvi': meanNDVI,
    'low_ndvi_fraction': lowFraction,
    'image_count': collection.size()
  });
};

var results = ee.FeatureCollection(years.map(computeMetrics));

print('Gevra — Full-Year Metrics (2019–2023):', results);
