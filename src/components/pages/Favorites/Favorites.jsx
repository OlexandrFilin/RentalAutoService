import { useEffect, useState } from 'react';
import { ContainerPage, WrapperCards } from '../Catalog/Catalog.styled';
import ModalAbout from 'components/ModalAbout/modalAbout';
import Card from 'components/card/Card';
import { getAllCars } from 'services/getCars';
import { FavoriteEmptyWrapp } from './Favorites.styled';
import { handleToggle } from 'services/tooggleFavorites';

const Favorites = () => {
  const [loader, setLoader] = useState(false);
  const [carsList, setCars] = useState([]);
  const [isShowModal, setShowModal] = useState(false);
  const [choiseCard, setChoiseCard] = useState({});

  const filtrCarsFavorites = data => {
    const cars = JSON.parse(localStorage.getItem('cars'));

    return data.filter(elem => {
      return cars.some(elemLS => elemLS.id === elem.id && elemLS.isFavorite);
    });
  };

  useEffect(() => {

    async function fetchData() {
      try {
        setLoader(true);
        const data = await getAllCars();
        const carsFavorites = filtrCarsFavorites(data);
        console.log('carsFavorites', carsFavorites);
        setCars(carsFavorites);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, []);

  const handlerLearnMore = id => {
    const chosenCar = carsList.find(car => car.id === id);
    console.log('choisenCar', chosenCar);
    if (chosenCar) {
      setChoiseCard(chosenCar);
      setShowModal(true);
    }
  };

  const closeLearnMore = () => {
    setShowModal(false);
  };



  
  return (
    <>
      {loader ? (
        <div>Завантаження ....</div>
      ) : (
        <>
          {carsList.length === 0 ? (
            <FavoriteEmptyWrapp>
              To display the list, first select the cars you like.
            </FavoriteEmptyWrapp>
          ) : (
            <ContainerPage>
              {isShowModal && (
                <ModalAbout
                  carCard={{ ...choiseCard }}
                  //learnMore={hanlerLearnMore}
                  closeLearnMore={closeLearnMore}
                />
              )}
              <WrapperCards>
                {carsList.map(car => (
                  <Card
                    key={car.id}
                    car={car}
                    handleToggle={()=>{handleToggle(car.id,setCars)}}
                    isShowHeart={false}
                    handlerLearnMore={handlerLearnMore}
                    closeLearnMore={closeLearnMore}
                  />
                ))}
              </WrapperCards>
            </ContainerPage>
          )}
        </>
      )}
    </>
  );
};
export default Favorites;
