export const numbersPage = (location, RESIDENTS_FORPAGE) => {
    const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_FORPAGE);
    const arrayPages = []
    for (let i = 1; i <= quantityPages; i++) {
      arrayPages.push(i);
    }
    return arrayPages;
  }