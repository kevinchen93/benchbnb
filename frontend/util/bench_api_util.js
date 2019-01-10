export const fetchBenches = (filters) => {
  return $.ajax({
    method: 'GET',
    url: 'api/benches',
    data: filters
  });
};

export const fetchBench = (benchId) => {
  return $.ajax({
    method: 'GET',
    url: `api/benches/${benchId}`
  });
};

export const createBench = benchForm => {
  return $.ajax({
    method: 'POST',
    url: 'api/benches',
    data: benchForm,
    contentType: false,
    processData: false
  });
};
