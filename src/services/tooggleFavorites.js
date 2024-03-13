//шукаємо по id in localStorage та оновлюємо
const UpdateLocalStorage = (car, isFavorite) => {
    //оримуємо збережені в  localStorage фаворити
    let carsLocal = JSON.parse(localStorage.getItem('cars'));
    let findCar;
    //якщо в localStorage щось збережено шукаємо серед збереженого наш
    if (carsLocal) {
      findCar = carsLocal.find(carLocal => carLocal.id === car.id);
    } else {
      carsLocal = [];
    }
    if (findCar) {
      const newCarsLocal = carsLocal.map(carLocal => {
        if (carLocal.id === car.id) {
          //повертаємо оновлене елемент з оновленим значенням фаворита
          return { ...carLocal, isFavorite };
        } else {
          return carLocal;
        }
      });
      //записуємо з новим значенням фаворитів
      localStorage.setItem('cars', JSON.stringify(newCarsLocal));
    } else {
      carsLocal.push({ id: car.id, isFavorite });
      localStorage.setItem('cars', JSON.stringify(carsLocal));
    }
  };
  export const handleToggle = (id,setCars) => {
    setCars(prevCarsList =>
      prevCarsList.map(car => {
        if (car.id === id) {
          //шукаємо по id in localStorage та оновлюємо
          UpdateLocalStorage(car, !car.isFavorite);
          return { ...car, isFavorite: !car.isFavorite };
        } else {
          return car;
        }
      })
    );
  };