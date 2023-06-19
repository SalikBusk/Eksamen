import image1 from '../Assets/Uploads/Tea-Black.jpg'
import image2 from '../Assets/Uploads/Tea-Green.jpg'
import image3 from '../Assets/Uploads/Tea-Oolong.jpg'
import image4 from '../Assets/Uploads/Tea-White.jpg'

interface Image {
  id: string;
  url: string;
}

const GalleryArr: { bigImage: string; images: Image[] }[] = [
  {
    bigImage: image1,
    images: [
      {
        id: "1",
        url: image1,
      },
      {
        id: "2",
        url: image2,
      },
      {
        id: "3",
        url: image3,
      },
      {
        id: "4",
        url: image4,
      },
    ],
  },
];

export default GalleryArr;