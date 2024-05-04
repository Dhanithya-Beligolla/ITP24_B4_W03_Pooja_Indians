import { useParams } from "react-router-dom";
import classes from "./foodEdit.module.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { add, getById, update } from "../../services/foodService";
import Title from "../../components/Title/Title";
import InputContainer from "../../components/InputContainer/InputContainer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { uploadImage } from "../../services/uploadService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function FoodEditPage() {
  const { foodId } = useParams();
  const [imageUrl, setImageUrl] = useState();
  const isEditMode = !!foodId;

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (!isEditMode) return;

    getById(foodId).then((food) => {
      if (!food) return;
      reset(food);
      setImageUrl(food.imageUrl);
    });
  }, [foodId]);

  const submit = async (foodData) => {
    const food = { ...foodData, imageUrl };

    if (isEditMode) {
      await update(food);
      toast.success(`Food "${food.name}" updated successfully!`);
      return;
    }

    const newFood = await add(food);
    toast.success(`Food "${food.name}" added successfully!`);
    navigate("/admin/editFood/" + newFood.id, { replace: true });
  };

  const upload = async (event) => {
    setImageUrl(null);
    const imageUrl = await uploadImage(event);
    setImageUrl(imageUrl);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title title={isEditMode ? "Edit Food" : "Add Food"} />
        <form
          className={classes.form}
          onSubmit={handleSubmit(submit)}
          noValidate
        >
          <InputContainer label="Select Image">
            <input type="file" onChange={upload} accept="image/jpeg" />
          </InputContainer>

          {imageUrl && (
            <a href={imageUrl} className={classes.image_link} target="blank">
              <img src={imageUrl} alt="Uploaded" />
            </a>
          )}

          <Input
            type="text"
            label="Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 5,
                message: "Name must be at least 5 characters long",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name must contain only letters and spaces",
              },
              maxLength: {
                value: 50,
                message: "Name cannot exceed 50 characters",
              },
            })}
          />
          {errors.name && (
            <span className={classes.error}>
              * {errors.name.message}
            </span>
          )}

          <Input
            type="number"
            label="Price"
            {...register("price", {
              required: "Price is required",
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Price must be a valid number",
              },
              min: {
                value: 0,
                message: "Price must be greater than or equal to 0",
              },
            })}
          />
          {errors.price && (
            <span className={classes.error}>
              * {errors.price.message}
            </span>
          )}

          <Input
            type="text"
            label="Tags"
            {...register("tags", {
              pattern: {
                value: /^[\w\s,]+$/,
                message: "Tags can only contain letters, numbers, spaces, and commas",
              },
              maxLength: {
                value: 100,
                message: "Tags cannot exceed 100 characters",
              },
            })}
          />
          {errors.tags && (
            <span className={classes.error}>
              * {errors.tags.message}
            </span>
          )}

          {/* Replace this input with a select field for Origins */}

          <Input
            type="text"
            label="Origins"
            {...register("origins", {
              required: "Origins is required",
            })}
          />
          {errors.origins && (
            <span className={classes.error}>
              * {errors.origins.message}
            </span>
          )}

          <Input
            type="text"
            label="Cook Time"
            {...register("cookTime", {
              required: "Cook Time is required",
              pattern: {
                value: /^\d+-\d+$/,
                message: "Cook Time must be in the format of 20-30",
              },
              validate: {
                cookTimeRange: (value) => {
                  const [minTime, maxTime] = value.split("-").map(Number);

                  // Define the minimum and maximum allowed cook times
                  const minAllowedCookTime = 0;
                  const maxAllowedCookTime = 60;

                  // Check if the entered range falls within the acceptable range
                  return (
                    minTime >= minAllowedCookTime &&
                    maxTime <= maxAllowedCookTime &&
                    minTime < maxTime
                  );
                },
              },
            })}
          />
          {errors.cookTime && (
            <span className={classes.error}>
              * {errors.cookTime.message}
            </span>
          )}

          <Button type="submit" text={isEditMode ? "Update" : "Create"} />
        </form>
      </div>
    </div>
  );
}
