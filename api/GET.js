export const fetchProfessionals = async () => {
  const response = await fetch(
    "https://touchinspiration-0ada.restdb.io/rest/sample",
    {
      headers: {
        "x-apikey": "63be7360969f06502871ad7f",
      },
    }
  );
  const get_professionals = await response.json();
  return get_professionals;
};
