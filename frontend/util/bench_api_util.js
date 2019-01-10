export const fetchBenches = (filters) => {
  return $.ajax({
    method: 'GET',
    url: 'api/benches',
    data: filters
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
