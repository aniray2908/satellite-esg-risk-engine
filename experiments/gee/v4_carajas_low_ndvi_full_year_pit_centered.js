// ==========================================
// Phase 2 — Carajás Case Study
// Version: v4
// Purpose: Proper spatial anchoring + temporal stabilization
// Metric: Mean NDVI + Low NDVI Fraction (<0.2)
// Composite: Full-Year Median
// Key Learning: Correct spatial targeting yields stable mining signal
// ==========================================

var point = ee.Geometry.Point([-50.535186384675605, -5.798784613873028]);
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

  var meanNDVI = ndvi.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: buffer,
    scale: 10,
    maxPixels: 1e9
  }).get('NDVI');

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
    'low_ndvi_fraction': lowFraction
  });
};

var results = ee.FeatureCollection(years.map(computeMetrics));

print('v4 — Pit-Centered Full-Year Metrics:', results);
