export const createNewEntry = (setBlogEntries) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "add_entry",
      payload: {},
    }),
  };

  return fetch("https://omisk.hu/admin.php", requestOptions)
    .then((response) => response.json())
    .then((data) => getBlogEntries().then((entries) => setBlogEntries(entries)))
    .catch((err) => {
      throw err;
    });
};

export const getBlogEntries = () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "get_entries",
      payload: {},
    }),
  };

  return fetch("https://omisk.hu/admin.php", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};
