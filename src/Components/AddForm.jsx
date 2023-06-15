import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import useHttp from "../hooks/useHttp";
import { newsAdded } from "../News/newsSlice";

const AddForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { request } = useHttp();

  const submitForm = (e) => {
    const newNews = {
      id: v4(),
      title,
      description,
      category,
    };
    e.preventDefault();
    if (title.length > 0) {
      request("http://localhost:3001/news", "POST", JSON.stringify(newNews))
        .then((res) => console.log("Successfully added"))
        .then((data) => dispatch(newsAdded(newNews)));
      toast.success("Added successfully");
    }
    setTitle("");
    setDescription("");
    setCategory("");
  };
  const subTitle = (e) => {
    setTitle(e.target.value);
  };
  const subDescription = (e) => {
    setDescription(e.target.value);
  };
  const subCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="total">
      <form className="add">
        <input
          type="text"
          value={title}
          onChange={subTitle}
          placeholder="enter news"
          className="title"
        />
        <textarea
          placeholder="enter description"
          onChange={subDescription}
          value={description}
          className="desc"
        ></textarea>
        <select
          className="form-select select form-select-sm"
          defaultValue={"DEFAULT"}
          onChange={subCategory}
          value={category}
        >
          <option value="DEFAULT" selected>
            choose category
          </option>
          <option value="sport">sport</option>
          <option value="weather">weather</option>
          <option value="world">world</option>
        </select>
        <button onClick={submitForm} id="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
