export const addFildFavorites = data => {
    //отримуєм з localStorage  записані там
    const cars = JSON.parse(localStorage.getItem('cars'));
    return data.map(car => {
      if (cars) {
        const findCar = cars.find(elem => elem.id === car.id);
        if (findCar) {
          return { ...car, isFavorite: findCar.isFavorite };
        }
      }
      return { ...car, isFavorite: false };
    });
  };