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

      
      
      console.log('connect successfully---');
    } catch (error) {
      console.log(error);
    }
  };

  