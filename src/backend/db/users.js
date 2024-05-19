import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 'vhvsbP_52',
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    profileAvatar:
      "https://res.cloudinary.com/dogvmq3s7/image/upload/v1688277178/iShare/atbwnvlcabmkhqem1r2k.png",
    profileBackground:
      "https://res.cloudinary.com/dogvmq3s7/image/upload/v1688277340/iShare/qlexx8eovrlvvunpmbtt.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'd3Bie_250',
    firstName: "Dhruvi",
    lastName: "Joshi",
    username: "dhruvi45",
    password: "dhruvi123",
    profileAvatar: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 's20Bie_32',
    firstName: "Vruti",
    lastName: "Joshi",
    username: "vruti45",
    password: "vruti123",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    profileAvatar:
      "https://res.cloudinary.com/dogvmq3s7/image/upload/v1686487408/samples/people/kitchen-bar.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 's2d3Bieol_0',
    firstName: "Urvi",
    lastName: "Shah",
    username: "urvi0202",
    password: "urvi123",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    profileAvatar:
      "https://res.cloudinary.com/dogvmq3s7/image/upload/v1686487410/samples/people/smiling-man.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 's2Biewe_9',
    firstName: "Kinjal",
    lastName: "Soni",
    username: "kinjal06",
    password: "kinjal123",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    profileAvatar:
      "https://res.cloudinary.com/dogvmq3s7/image/upload/v1686487412/samples/people/boy-snow-hoodie.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  
];
