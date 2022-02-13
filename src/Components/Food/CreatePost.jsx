import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../../redux/Action/Action";
import AuthReducer from "./../../redux/Reducer/AuthReducer";

const CreatePost = () => {
  let [state, setState] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFood());
  }, [state]);
  let data = useSelector(state => state.AuthReducer.upload_Data);
  //   console.log(data);

  let select = [...data];
  console.log(select);

  return (
    <section id="createBlock">
      <article>
        {select.map((e, index) => {
          return (
            <div key={index}>
              <figure>
                <figcaption></figcaption>
                <img
                  src={e.poster}
                  alt="img"
                  //   style={{ width: "500px", height: "300px" }}
                />
              </figure>

              <main>
                <h2>{e.title}</h2>
                <h4>{e.Menu_title}</h4>
                <h4>{e.food_category}</h4>
                <h4>Price:&#x20B9;{e.price}</h4>
              </main>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default CreatePost;
