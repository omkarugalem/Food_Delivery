import React, { useState } from "react";
import { Fragment } from "react";
import { toast } from "react-toastify";
import "./Add.css";
import { useDispatch } from "react-redux";
import { RestaurantStorage } from "../../redux/Action/Action";

let genre = ["veg", "NonVeg"];

const AddProducts = () => {
  let dispatch = useDispatch();
  let [state, setState] = useState({
    Menu_title: "",
    Price: "",
    food_category: "",
    restaurant_title: "",
    food_details: "",
    loading: false,
  });

  let {
    Menu_title,
    Price,
    food_category,
    restaurant_title,
    food_details,
    loading,
  } = state;

  let [Poster, setPoster] = useState("");

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handlePoster = e => {
    setPoster({ [e.target.name]: e.target.files[0] });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      console.log(setState);
      // let FOOD_POSTER = Poster.food_poster.name;
      // let upload_food = Poster.food_poster;
      dispatch(RestaurantStorage(Poster,state));
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };

  return (
    <section id="AudioSection">
      <article>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Menu</label>
            <input
              type="text"
              className="form-control"
              name="Menu_title"
              value={Menu_title}
              placeholder="Enter a Menu"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a Price"
              name="Price"
              value={Price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="language">Restaurant Name</label>
            <input
              type="text"
              className="form-control"
              name="restaurant_title"
              placeholder="Enter a Restaurant"
              value={restaurant_title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Food Category</label>
            <select
              name="food_category"
              value={food_category}
              onChange={handleChange}
            >
              {genre.map((val, index) => (
                <Fragment key={index}>
                  <option value={val} defaultValue={val[0]}>
                    {val}
                  </option>
                </Fragment>
              ))}
            </select>
          </div>
          <div className="form-group audio_details">
            <label htmlFor="audio_details">Food Details</label>
            <textarea
              name="food_details"
              cols="30"
              rows="10"
              className="form-control"
              value={food_details}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="food_poster"> Food Poster</label>
            <input type="file" name="food_poster" onChange={handlePoster} />
          </div>
         
          <div className="form-group btn btn-group btn-block">
            <button type="submit">{loading ? "uploading" : "upload"}</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default AddProducts;
