import React, { useEffect, useState } from 'react';
import { ContainerPage, LoadMoreBtn, WrapperCards } from './Catalog.styled';

import { getAllCars } from 'services/getCars';
import Card from 'components/card/Card';
//сторінка, що завантажуєтсья

const Catalog = () => {
  const [carsList, setCars] = useState([]);
  const [page, setpage] = useState(1);
  const [loader, setLoader] = useState(false);
  const addFildFavorites = data => {
    return data.map(car => {
      const cars = JSON.parse(localStorage.getItem('cars'));

      if (cars) {
        const findCar = cars.find(elem => elem.id === car.id);
        if (findCar) {
          //car.isFavorite = findCar.isFavorite;
          return { ...car, isFavorite: findCar.isFavorite };
        }
      }
      return { ...car, isFavorite: false };
    });
  };
  useEffect(() => {
    async function fetchData() {
      try {
        setLoader(true);
        await getAllCars(page).then(data => {
          //Додаємо до елементів масиву поле isFavorites З данними localctorage
          const carsWithFavorites = addFildFavorites(data);
          setCars(carsWithFavorites);
        });
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, [page]);
  const hanlerLoadMore = () => {
    page + 1 < 4 ? setpage(page + 1) : setpage(1);
  };
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
  const handleToggle = id => {
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
  const hanlerLearnMore = id => {};

  return loader ? (
    <div>Завантаження ....</div>
  ) : (
    <ContainerPage>
      <WrapperCards>
        {carsList.map(car => {
          return (
            <Card
              handleToggle={handleToggle}
              car={car}
              hanlerLearnMore={hanlerLearnMore}
            />
          );
        })}
      </WrapperCards>
      <LoadMoreBtn onClick={hanlerLoadMore}>Load More</LoadMoreBtn>
    </ContainerPage>
  );
};

export default Catalog;
