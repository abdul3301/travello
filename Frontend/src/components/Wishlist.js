import react, { useEffect, useState } from "react";
import { Card } from "antd";
import {
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
const Wishlist = ({history}) => {
  const { Meta } = Card;
  const email = localStorage.getItem("email");
  const [likedItems, setlikedItems] = useState(
    JSON.parse(localStorage.getItem("liked-products")) || []
  );
  useEffect(()=>{
    if(!email){
      history.push("/Login")
    }
  },[])
  const handleHeartClick = (id) => {
    let itemIndex=likedItems.findIndex((li)=>li.id==id);
    likedItems[itemIndex]={...likedItems[itemIndex],user:likedItems[itemIndex].user.filter((element)=> element !=email)}; // [4,7,8]-> [4,8]
    console.log({likedItems})
    setlikedItems([...likedItems]);
    localStorage.setItem("liked-products", JSON.stringify(likedItems));
    alert("Removed from wishlist");
  };

  return (
    <div className="productMain">
      <div className="productSubMain"
      // style={{
      //   display: "flex",
      //   position: "relative",
      //   top: "8rem",
      //   gap: "30%",
      //   padding: "50px",
      // }}
      >
        <div className="productCard">
          {likedItems.length ? (
            likedItems.filter((lp) => lp.user.includes(email)).map((item, i) => (
              <Card
                actions={[
                  item.liked && (
                    <HeartFilled
                      style={{
                        fontSize: "25px",
                        color: "red",
                      }}
                      onClick={() => handleHeartClick(item.id)}
                    />
                  ),
                  <a target="_blank" href={item.url}><button className="buyNowBtn">BUY NOW</button></a>,

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
            ))
          ) : (
            <h2>No liked items</h2>
          )}
        </div>

      </div>
    </div>

  );
};

export default Wishlist;
