export const fetchBenches = data => (
  $.ajax({
    method: 'GET',
    url: 'api/benches',
    data
  })
);

export const fetchBench = benchId => (
  $.ajax({
    method: 'GET',
    url: `api/benches/${benchId}`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);

export const createBench = benchForm => (
  $.ajax({
    method: 'POST',
    url: 'api/benches',
    data: benchForm,
    contentType: false,
    processData: false
  })
);
