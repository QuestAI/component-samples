import ProfileImage from './assets/images/Profile.png';
import ProfileImage1 from './assets/images/Profile_1.png';

import Image1 from './assets/images/images_1.png';
import Image2 from './assets/images/images_2.png';
import Image3 from './assets/images/images_3.png';

const useCardList = () => {
  const cards = [
    {
      index: 0,
      isSold: false,
      profileImage: ProfileImage,
      image: Image1,
      sellerName: "Ankur Pansari",
      sellerUsername: "anxman",
      listingTime: "1 hour ago",
      price: "$19,999",
      condition: "HP",
      description: "Added Unlimited Black Lotus to Power Nine Collection"
    },
    {
      index: 1,
      isSold: false,
      profileImage: ProfileImage1,
      image: Image2,
      sellerName: "Keldon H",
      sellerUsername: "kalabnik",
      listingTime: "1 hour ago",
      price: "$19,999",
      condition: "BGS 9.5 Quad",
      description: "Added Unlimited Mox Sapphire to Power Nine Collection"
    },
    {
      index: 2,
      isSold: true,
      profileImage: ProfileImage,
      image: Image3,
      sellerName: "Ankur Pansari",
      sellerUsername: "anxman",
      listingTime: "1 hour ago",
      price: "$19,999", condition: "HP",
      description: "Sold Mishra’s Workshop to Jelani Clark"
    },
  ];

  let data = { cards };
  const handleButtonClick = (index) => {
    // Handle button click here
    console.log("Button Clicked: " + index);
  };

  let fns = { handleButtonClick };
  return { data, fns };
}

export default useCardList;