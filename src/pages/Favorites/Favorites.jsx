import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ContainerPage, WrapperCards } from '../Catalog/Catalog.styled';
import ModalAbout from 'components/ModalAbout/modalAbout';
import Card from 'components/card/Card';
import { getAllCars } from 'services/getCars';
import { FavoriteEmptyWrapp } from './Favorites.styled';
import { addFildFavorites } from 'components/addFilteFavorites';

const Favorites = () => {
  const [loader, setLoader] = useState(false);
  const [carsList, setCarsF] = useState([]);
  const [isShowModal, setShowModal] = useState(false);
  const [choiseCard, setChoiseCard] = useState({});

  //const [refr,setRefr]= useState(false);

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
        const carsWithFavorites = addFildFavorites(carsFavorites);
        setCarsF(carsWithFavorites);
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
    //console.log('choisenCar', chosenCar);
    if (chosenCar) {
      setChoiseCard(chosenCar);
      setShowModal(true);
    }
  };

  const closeLearnMore = () => {
    setShowModal(false);
  };
  const modalRoot = document.querySelector("#root-modal");
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
              {isShowModal && createPortal(
                <ModalAbout
                  carCard={{ ...choiseCard }}
                  //learnMore={hanlerLearnMore}
                  closeLearnMore={closeLearnMore}
                />,modalRoot
              )}
              <WrapperCards>
                {carsList.map(car => (
                  <Card
                    key={car.id}
                    car={car}
                    setCars={setCarsF}
                   
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

// import React, { useEffect, useState } from 'react';
// import { ContainerPage, WrapperCards } from '../Catalog/Catalog.styled';
// import ModalAbout from 'components/ModalAbout/modalAbout';
// import Card from 'components/card/Card';
// import { getAllCars } from 'services/getCars';
// import { FavoriteEmptyWrapp } from './Favorites.styled';
// import { addFildFavorites } from 'components/addFilteFavorites';

// const Favorites = () => {
//   const [loader, setLoader] = useState(false);
//   const [carsList, setCars] = useState([]);
//   const [isShowModal, setShowModal] = useState(false);
//   const [choiseCard, setChoiseCard] = useState({});

  

//   const filtrCarsFavorites = data => {
//     const cars = JSON.parse(localStorage.getItem('cars'));
//     return data.filter(elem => {
//       return cars.some(elemLS => elemLS.id === elem.id && elemLS.isFavorite);
//     });
//   };

//   useEffect(() => {
// const fetchFavoriteCars = async () => {
//     try {
//       setLoader(true);
//       const data = await getAllCars();
//       const carsFavorites = filtrCarsFavorites(data);
//       const carsWithFavorites = addFildFavorites(carsFavorites);
//       setCars(carsWithFavorites);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoader(false);
//     }
//   };

//     fetchFavoriteCars();
//   }, []);

//   const handlerLearnMore = id => {
//     const chosenCar = carsList.find(car => car.id === id);
//     if (chosenCar) {
//       setChoiseCard(chosenCar);
//       setShowModal(true);
//     }
//   };

//   const closeLearnMore = () => {
//     setShowModal(false);
//   };

//   const handleRemoveFromFavorites = id => {
//     const updatedCarsList = carsList.filter(car => car.id !== id);
//     setCars(updatedCarsList);
//     // Можливо, вам потрібно також оновити локальне сховище localStorage з улюбленими автомобілями
//   };

//   return (
//     <>
//       {loader ? (
//         <div>Завантаження ....</div>
//       ) : (
//         <>
//           {carsList.length === 0 ? (
//             <FavoriteEmptyWrapp>
//               To display the list, first select the cars you like.
//             </FavoriteEmptyWrapp>
//           ) : (
//             <ContainerPage>
//               {isShowModal && (
//                 <ModalAbout
//                   carCard={{ ...choiseCard }}
//                   closeLearnMore={closeLearnMore}
//                 />
//               )}
//               <WrapperCards>
//                 {carsList.map(car => (
//                   <Card
//                     key={car.id}
//                     car={car}
//                     setCars={setCars}
//                     handlerLearnMore={handlerLearnMore}
//                     removeFromFavorites={handleRemoveFromFavorites}
//                   />
//                 ))}
//               </WrapperCards>
//             </ContainerPage>
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default Favorites;