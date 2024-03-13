import React, { useEffect, useRef, useState } from 'react';
import { ContainerPage, LoadMoreBtn, WrapperCards } from './Catalog.styled';

import { getAllCars } from 'services/getCars';
import Card from 'components/card/Card';
import ModalAbout from 'components/ModalAbout/modalAbout';
import FilterForm from 'components/FilterForm/filterForm';
import { handleToggle } from 'services/tooggleFavorites';

//сторінка, що завантажуєтсья

const Catalog = () => {
  const [carsList, setCars] = useState([]);
  const [page, setpage] = useState(0);
  const [loader, setLoader] = useState(false);
  const [isShowModal, setShowModal] = useState(false);
  const [choiseCard, setChoiseCard] = useState({});
  const [filter, setFilter] = useState({ brand: '' });
  const [isShowLoadMore, setShowLoadMore] = useState(true);
  //const loadMoreRef = useRef();
  const containtrPageRef = useRef();
  // Функція, яка автоматично прокручує контейнер до його кінця
  const scrollToBottom = (topDirect) => {
     const containerRef = containtrPageRef.current;
    const rect = containerRef.getBoundingClientRect();
    let direction;
    topDirect ?  direction = rect.top : direction = rect.bottom;
       window.scrollTo({
      top: direction,
      behavior: 'smooth',
    });
  };
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const scrollTimeOut = () => {
  //   setTimeout(() => {
  //     scrollToBottom();
  //   }, 3000);
  // };
  useEffect(() => {
    setpage(1);
 
  }, []);
  // useEffect(() => {
  //   scrollTimeOut();

  //   // Викликаємо функцію прокрутки до кінця при завантаженні компонента
  //   //scrollTimeOut();
  // }, [page, scrollTimeOut]);

  const addFildFavorites = data => {
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

  useEffect(() => {
    //щоб через strictMode не було два запити на бек page =0
    if (page !== 0) {
      console.log('111', 111);
      async function fetchData() {
        try {
          setLoader(true);
          const data = await getAllCars(page);
          if (data.length < 12) {
            setShowLoadMore(false);
          }
          let filteredArray;
          if (filter.brand) {
            filteredArray = data.filter(elem => elem.make === filter.brand);
          } else {
            filteredArray = data;
          }
          const carsWithFavorites = addFildFavorites(filteredArray);
          setCars(prevCarsList => {
            return [...prevCarsList, ...carsWithFavorites];
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoader(false);
        }
      }
      fetchData();
    }
  }, [page, filter.brand]);

  const hanlerLoadMore = () => {
    setpage(prevPage => (prevPage += 1));
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
      <button onClick={()=>{scrollToBottom(false)}}>scroll</button>
      <FilterForm handleSetFilter={handleSetFilter} />
      {loader ? (
        <div>Завантаження ....</div>
      ) : (
        <ContainerPage ref={containtrPageRef}>
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
                  handleToggle={()=>{handleToggle(car.id,setCars)}}
                  car={car}
                  handlerLearnMore={hanlerLearnMore}
                  closeLearnMore={closeLearnMore}
                />
              );
            })}
          </WrapperCards>
          <button onClick={()=>{scrollToBottom(true)}}>scroll</button>
          {isShowLoadMore && (
            <LoadMoreBtn onClick={hanlerLoadMore}>
              Load More
            </LoadMoreBtn>
          )}
        </ContainerPage>
      )}
    </>
  );
};

export default Catalog;
