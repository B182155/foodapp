export function filterData(searchInput, restaurants) {
  const fdata = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      ?.toLowerCase()
      .includes(searchInput.toLowerCase());
  });
  return fdata;
}
