import React from 'react';
import {
  ContainerCard,
  HeartBlueSvg,
  HeartWhiteSvg,
  ImgCar,
  AboutCarParagr,
  Separator,
  ModelCarSpan,
  RentalPriceSpan,
  AboutCarSpan,
  AddresParagr,
  LearnMoreBtn,
  HeartBtn,
} from './Card.styled';
import { limitLengthModel, parseAddress } from 'services/parseDataCard';
import { handleToggle } from 'services/tooggleFavorites';

const Card = ({ car,setCars, handlerLearnMore }) => {
  const {
    id,
    isFavorite,
    img,
    model,
    type,
    make,
    rentalPrice,
    address,
    rentalCompany,
    year,
    engineSize,
  } = car;





// //шукаємо по id in localStorage та оновлюємо
// const UpdateLocalStorage = (car, isFavorite) => {
//   //оримуємо збережені в  localStorage фаворити
//   let carsLocal = JSON.parse(localStorage.getItem('cars'));
//   let findCar;
//   //якщо в localStorage щось збережено шукаємо серед збереженого наш
//   if (carsLocal) {
//     findCar = carsLocal.find(carLocal => carLocal.id === car.id);
//   } else {
//     carsLocal = [];
//   }
//   if (findCar) {
//     const newCarsLocal = carsLocal.map(carLocal => {
//       if (carLocal.id === car.id) {
//         //повертаємо оновлене елемент з оновленим значенням фаворита
//         return { ...carLocal, isFavorite };
//       } else {
//         return carLocal;
//       }
//     });
//     //записуємо з новим значенням фаворитів
//     localStorage.setItem('cars', JSON.stringify(newCarsLocal));
//   } else {
//     carsLocal.push({ id: car.id, isFavorite });
//     localStorage.setItem('cars', JSON.stringify(carsLocal));
//   }
// };



//  const handleToggle = (id,setCars) => {
//     setCars(
      
//       (prList)=>{
//         console.log('prList', prList)
//         const newList = prList.map(car => {

//       if (car.id === id) {

//         //шукаємо по id in localStorage та оновлюємо
//         UpdateLocalStorage(car, !car.isFavorite);
        
//         return { ...car, isFavorite: !car.isFavorite };
//       } else {
//         return car;
//       }
//     }
          
//       )
//       console.log('newList', newList)
//       return [...newList]
//   }
//     )}




  //витягуємо з рядка адреси країну та місто
  const objAddress = parseAddress(address);
  //щоб не ломався рядок опису авто, лімітуємо сумарну довжину виробник + модель
  const typeModel = limitLengthModel(model, make);
  return (
    <ContainerCard key={id}>
      {isFavorite ? (
        <HeartBtn type="button" onClick={() => handleToggle(id,setCars)}>
          <HeartBlueSvg />
        </HeartBtn>
      ) : (
        <HeartBtn type="button" onClick={() => handleToggle(id,setCars)}>
          <HeartWhiteSvg />
        </HeartBtn>
      )}

      <ImgCar src={img} alt={model} />

      <AboutCarParagr>
        <AboutCarSpan>
          {`${typeModel.make} `}
          <ModelCarSpan>{`${typeModel.model}`}</ModelCarSpan>
          {`, ${year}`}
        </AboutCarSpan>
        <RentalPriceSpan>{`${rentalPrice}`}</RentalPriceSpan>
      </AboutCarParagr>
      <AddresParagr>
        {` ${objAddress.city} `}
        <Separator />
        {` ${objAddress.country} `}
        <Separator />
        {` ${rentalCompany} `}
        <Separator />
      </AddresParagr>
      <AddresParagr>
        {` ${type} `}
        <Separator />
        {` ${model} `}
        <Separator />
        {` ${id} `}
        <Separator />
        {` ${engineSize} `}
      </AddresParagr>

      <LearnMoreBtn
        onClick={() => {
          handlerLearnMore(id);
        }}
      >
        Learn More
      </LearnMoreBtn>
    </ContainerCard>
  );
};

export default Card;
