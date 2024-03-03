import React, { useEffect, useRef, useState } from 'react';
import { ContainerPage, LoadMoreBtn, WrapperCards } from './Catalog.styled';

import { getAllCars } from 'services/getCars';
import Card from 'components/card/Card';
import ModalAbout from 'components/ModalAbout/modalAbout';
import FilterForm from 'components/FilterForm/filterForm';

//сторінка, що завантажуєтсья

const Catalog = () => {
  const [carsList, setCars] = useState([]);
  const [page, setpage] = useState(0);
  const [loader, setLoader] = useState(false);
  const [isShowModal, setShowModal] = useState(false);
  const [choiseCard, setChoiseCard] = useState({});
  const [filter, setFilter] = useState({ brand: '' });
  const containerRef = useRef(null);

  // Функція, яка автоматично прокручує контейнер до його кінця
  const scrollToBottom = () => {
    //  containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };
  useEffect(() => {
     setpage(1);
    // Викликаємо функцію прокрутки до кінця при завантаженні компонента
    scrollToBottom();
  }, []);

  useEffect(() => {
    console.log('containerкуа', containerRef)
    if (containerRef.current) {
      const scrollHeightValue = containerRef.current.scrollHeight;
      console.log('Scroll Height:', scrollHeightValue);
    }
  }, []);


  const addFildFavorites = data => {
    return data.map(car => {
      const cars = JSON.parse(localStorage.getItem('cars'));
      if (cars) {
        const findCar = cars.find(elem => elem.id === car.id);
        if (findCar) {
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
        const data = await getAllCars(page);
        let filteredArray;
        if (filter.brand) {
          filteredArray = data.filter(elem => elem.make === filter.brand);
        } else {
          filteredArray = data;
        }

        const carsWithFavorites = addFildFavorites(filteredArray);
        // setCars(prevCarsList => prevCarsList.concat(carsWithFavorites));
        setCars(prevCarsList => [...prevCarsList, ...carsWithFavorites]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoader(false);
      }
    }
    fetchData();

  }, [page, filter.brand]);

  //якщо білше закінчуютья авто в базі перекидаємо на першу сторінку
  const hanlerLoadMore = () => {
    setpage(prevPage => prevPage += 1);
    scrollToBottom();
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
  const hanlerLearnMore = id => {
    const chosenCar = carsList.find(car => car.id === id);
    if (chosenCar) {
      setChoiseCard(chosenCar);
      setShowModal(true);
    }
  };
  const closeLearnMore = () => {
    setShowModal(false);
  };
  const handleSetFilter = newfilter => {
    setFilter(newfilter);
  };
  return (
    <>

      <FilterForm handleSetFilter={handleSetFilter} />
      {loader ? (
        <div>Завантаження ....</div>
      ) : (
        <ContainerPage>
          {isShowModal && (
            <ModalAbout
              carCard={{ ...choiseCard }}
              closeLearnMore={closeLearnMore}
            />
          )}
          <WrapperCards>
            {carsList.map(car => {
              return (
                <Card
                  key={car.id}
                  handleToggle={handleToggle}
                  car={car}
                  isShowHeart={true}
                  handlerLearnMore={hanlerLearnMore}
                  closeLearnMore={closeLearnMore}
                />
              );
            })}
          </WrapperCards>
          <LoadMoreBtn onClick={hanlerLoadMore}>Load More</LoadMoreBtn>
        </ContainerPage>
      )}
    </>
  );
};

export default Catalog;
