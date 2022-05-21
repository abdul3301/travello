import react, { useEffect, useState } from "react";
import { Card } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useAppConext } from "../context/AppContext";
import axios from "axios";
const Wishlist = ({ history }) => {
  const { Meta } = Card;
  const { user, dispatch } = useAppConext();
  const [likedItems, setlikedItems] = useState([]);
  const email = user.email;

  useEffect(async () => {
    if (!user?.email) {
      history.push("/Login");
      return;
    }
    const resp = await axios.post("http://localhost:5000/user/wishlist", {
      email,
    });
    console.log(resp);
    setlikedItems(resp.data.wishlist);
  }, []);
  const handleHeartClick = async (id) => {
    const resp = await axios.put("http://localhost:5000/user/wishlist", {
      email,
      productId: id,
    });
    let updatedItems = likedItems.filter((o) => o._id != id);
    setlikedItems([...updatedItems]);
    dispatch({ type: "UPDATE_WISHLIST", payload: updatedItems });
  };

  return (
    <div className="productMain">
      <div
        className="productSubMain"
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
            likedItems.map((item, i) => (
              <Card
                actions={[
                  <HeartFilled
                    style={{
                      fontSize: "25px",
                      color: "red",
                    }}
                    onClick={() => handleHeartClick(item.id)}
                  />,
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
