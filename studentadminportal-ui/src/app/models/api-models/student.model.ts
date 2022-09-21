import { Address } from "./address.model";
import { Gender } from "./gender.model";

export interface Student {
  id: String,
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  email: String,
  mobile: number,
  profileImageUrl: String,
  genderId: String,
  gender: Gender,
  address: Address
}
