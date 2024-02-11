import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    avatar:"https://avatars.githubusercontent.com/u/8225666",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    avatar:"https://avatars.githubusercontent.com/u/15609339",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Dhruvi",
    lastName: "Joshi",
    username: "Dhruvi45",
    password: "dhruvijoshi123",
    avatar:"https://avatars.githubusercontent.com/u/14308293",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
