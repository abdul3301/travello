import react, { useEffect, useState } from "react";
import { Card } from "antd";
import "./products.css";
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  ShoppingFilled,
} from "@ant-design/icons";
import axios from "axios";
import { useAppConext } from "../context/AppContext";
import { toast } from "react-toastify";
// let data = [
//   {
//     id: 1,
//     title: "SunGlasses",
//     desc: "You'll love this pair so much, we had to make them better and fully functional. Featuring TAC polarised, scratch resistant lenses, airplane mode sunglasses by Urban Monkey now come with a 1 year peel off warranty and are made with nickel free stainless steel making them suitable for all skin types.",
//     price: 999,
//     image:
//       "https://m.media-amazon.com/images/I/61dzJduUbqL._AC_UL480_QL65_.jpg",
//     liked: false,
//     url: "https://www.amazon.in/JIM-HALO-Protection-Sunglasses-Polarized/dp/B07FM655ML/ref=sr_1_1_sspa?crid=17AQF47EKXW3H&keywords=sunglasses+unisex+for+camping&qid=1650316180&sprefix=sunglasses+unisex+for+camping%2Caps%2C270&sr=8-1-spons&psc=1&smid=A14QOUC9X5ENJ1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQk0zSDdWVTI5RDlHJmVuY3J5cHRlZElkPUEwOTY0NDI2NU5IODZJSTJWVFQxJmVuY3J5cHRlZEFkSWQ9QTAwMTk5NzAyTUxSS1hFVDcyRzZYJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
//   },
//   {
//     id: 2,
//     title: "Cap",
//     desc: " Mesh Fabric Is Used On Both Sides Of The Hat Body For Stitching Design, With Strong Air Permeability Sweat Band Comfortable Material, Not Irritating To Skin, Easy To Dry, Strong Sweat Absorption Waterproof The Surface Material Of The Hat Can Temporarily Protect You From The Rain .",
//     price: 499,
//     image:
//       "https://m.media-amazon.com/images/I/51wGTFIDFEL._AC_UL480_QL65_.jpg",
//     liked: false,
//     url: "https://www.amazon.in/Oulm-Black-Baseball-Solid-Cap/dp/B09K12RCMV/ref=sr_1_2_sspa?crid=2BRLGKWZ82DI1&keywords=cap&qid=1650316237&sprefix=cap%2Caps%2C248&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQzBSR0U1SDMzWDRMJmVuY3J5cHRlZElkPUEwNjYyODgyUkg0T09KRTBUWTQ1JmVuY3J5cHRlZEFkSWQ9QTAyODAwMTYyTjFGRTJSUFZMSDhDJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
//   },
//   {
//     id: 3,
// title: "Bag",
// desc: " Designed by our team of passionate surfers in our design centre in based on the Basque coast for children under 40 kg learning to surf. An economical surfboard for children",
// price: 2399,
// image:
//   "https://m.media-amazon.com/images/I/91YkoMS+p2S._AC_UL480_QL65_.jpg",
// liked: false,
// url: "https://www.amazon.in/TRAWOC-Backpack-Trekking-Rucksack-NAVYBLUE/dp/B084DMYZR3/ref=sr_1_1_sspa?crid=17Q774DWPDKYH&keywords=camping+stuff&qid=1650315785&sprefix=camping+stuf%2Caps%2C315&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzWE5WOTJPSVEzTTImZW5jcnlwdGVkSWQ9QTA0MDY5MDNPMU1FTkJYMThKQzUmZW5jcnlwdGVkQWRJZD1BMDkzMTc4NTNTU1RMU1Y2RE5NQ0omd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
//   },
//   {
//     id: 4,
// title: "Tool Kit",
// desc: " Designed by our team  in our design centre in based on the website merchandise.",
// price: 7599,
// image:
//   "https://m.media-amazon.com/images/I/91Hf6QhU66S._AC_UL480_QL65_.jpg",
// liked: false,
// url: "https://www.amazon.in/WOWMVP-Survival-Emergency-Equipment-Adventures/dp/B09122Z3YS/ref=sr_1_5?crid=17Q774DWPDKYH&keywords=camping+stuff&qid=1650315785&sprefix=camping+stuf%2Caps%2C315&sr=8-5",
//   },
//   {
//     id: 5,
// title: "Torch",
// desc: " Designed by our team  in our design centre in based on the website merchandise.",
// price: 1399,
// image:
//   "https://m.media-amazon.com/images/I/61mDONG1eVL._AC_UL480_QL65_.jpg",
// liked: false,
// url: "https://www.amazon.in/OXMEZA-Aluminium-Rechargeable-Emergency-Accessories/dp/B09374QDYD/ref=sr_1_31?crid=3ODIAHJP6T117&keywords=camping+accessories&qid=1650316385&sprefix=camping+acc%2Caps%2C1809&sr=8-31",
//   },
//   {
//     id: 6,
// title: "Utensils",
// desc: " Designed by our team  in our design centre in based on the website merchandise.",
// price: 1299,
// image:
//   "https://m.media-amazon.com/images/I/71zb6Lv7s7L._AC_UL480_QL65_.jpg",
// liked: false,
// url: "https://www.amazon.in/REHTRAD-Set%EF%BC%8CCamping-Accessories-Outdoor%EF%BC%8CCamping-Bag%EF%BC%8CCamping/dp/B08V94CX4N/ref=sr_1_6?crid=3ODIAHJP6T117&keywords=camping+accessories&qid=1650316385&sprefix=camping+acc%2Caps%2C1809&sr=8-6",
//   },
// ];
export default function Products() {
  const { Meta } = Card;
  const [items, setItems] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const { user, dispatch } = useAppConext();
  console.log({ user });
  useEffect(async () => {
    //  ADDING THE PRODUCT USING THIS API
    // const product = await axios.post("http://localhost:5000/product", {
    //   title: "Utensils",
    //   desc: " Designed by our team  in our design centre in based on the website merchandise.",
    //   price: 1299,
    //   image:
    //     "https://m.media-amazon.com/images/I/71zb6Lv7s7L._AC_UL480_QL65_.jpg",
    //   url: "https://www.amazon.in/REHTRAD-Set%EF%BC%8CCamping-Accessories-Outdoor%EF%BC%8CCamping-Bag%EF%BC%8CCamping/dp/B08V94CX4N/ref=sr_1_6?crid=3ODIAHJP6T117&keywords=camping+accessories&qid=1650316385&sprefix=camping+acc%2Caps%2C1809&sr=8-6",
    // });
    const resp = await axios.get("http://localhost:5000/products");
    setItems(resp.data);
    setWishList([...user?.wishlist]);
  }, []);

  const handleHeartClick = async (id) => {
    if (!wishlist.includes(id)) {
      const resp = await axios.post("http://localhost:5000/user/wishlist/add", {
        productId: id,
        email: user?.email,
      });
      if (resp) {
        let wishlistItems = [...wishlist, id];
        dispatch({ type: "UPDATE_WISHLIST", payload: wishlistItems });
        setWishList([...wishlistItems]);
        toast.success("Added to wishlist!..");
      }
    }
  };

  return (
    <div className="productMain">
      <h1 style={{ fontFamily: "initial", fontSize: "30 px" }}>
        List of Products
      </h1>
      <div className="productSubMain">
        <div className="productCard">
          {items.map((item, i) => (
            <Card
              actions={[
                wishlist.includes(item._id) ? (
                  <HeartFilled
                    style={{ fontSize: "25px", color: "red" }}
                    onClick={() => handleHeartClick(item._id)}
                  />
                ) : (
                  <HeartOutlined
                    style={{ fontSize: "25px" }}
                    onClick={() => handleHeartClick(item._id)}
                  />
                ),

                <a target="_blank" href={item.url}>
                  <button className="buyNowBtn">BUY NOW</button>
                </a>,
              ]}
              style={{ width: 300, height: 400 }}
              cover={
                <img
                  src={item.image}
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                    border: "2px solid black",
                  }}
                />
              }
            >
              <Meta
                title={item.title}
                description={
                  <>
                    {`${item.desc.substr(0, 50)}....`}
                    <h3>{`₹${item.price}/-`}</h3>
                  </>
                }
              ></Meta>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
