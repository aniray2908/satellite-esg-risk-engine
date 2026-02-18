// ==========================================
// Phase 4 Portfolio Expansion
// Asset: Grasberg Mine (Indonesia)
// Metric: Mean NDVI + Low NDVI Fraction (< 0.2)
// Composite: Full-Year Median (2019–2023)
// Spatial: 1 km pit-centered buffer
// ==========================================

// Verified pit-centered coordinate
var point = ee.Geometry.Point([137.11385820372817, -4.056977176685838]);

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
    'low_ndvi_fraction': lowFraction,
    'image_count': collection.size()
  });
};

var results = ee.FeatureCollection(years.map(computeMetrics));

print('Grasberg — Full-Year Metrics (2019–2023):', results);

Export.table.toDrive({
  collection: results,
  description: 'grasberg_pit_centered_full_year_v1',
  fileFormat: 'CSV'
});
