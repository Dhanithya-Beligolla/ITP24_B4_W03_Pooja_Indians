import {connect, set} from 'mongoose';
import { FoodModel } from '../models/food.model.js';
import { sample_foods } from '../data.js';

set('strictQuery', true);

export const dbconnect = async () => {
    try {
      connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      await seedFoods();
      
      console.log('connect successfully---');
    } catch (error) {
      console.log(error);
    }
  };

  async function seedFoods() {
    const foods = await FoodModel.countDocuments();
    if (foods > 0) {
      console.log('Foods seed is already done!');
      return;
    }
  
    for (const food of sample_foods) {
      food.imageUrl = `/foods/${food.imageUrl}`;
      await FoodModel.create(food);
    }
  
    console.log('Foods seed Is Done!');
  }