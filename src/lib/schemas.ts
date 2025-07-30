import { z } from "zod";
export const phoneNumberSchema = z
  .string()
  .regex(/^09\d{9}$/, "Phone number must start with 09 and have 11 digits!");

export const userSchema = z.object({
  gender: z.string(),
  name: z.object({
    title: z.string(),
    first: z.string(),
    last: z.string(),
  }),
  location: z.object({
    street: z.object({
      number: z.number(),
      name: z.string(),
    }),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postcode: z.number(),
    coordinates: z.object({
      latitude: z.string(),
      longitude: z.string(),
    }),
    timezone: z.object({
      offset: z.string(),
      description: z.string(),
    }),
  }),
  email: z.string(),
  login: z.object({
    uuid: z.string(),
    username: z.string(),
    password: z.string(),
    salt: z.string(),
    md5: z.string(),
    sha1: z.string(),
    sha256: z.string(),
  }),
  dob: z.object({
    date: z.string(),
    age: z.number(),
  }),
  registered: z.object({
    date: z.string(),
    age: z.number(),
  }),
  phone: z.string(),
  cell: z.string(),
  id: z.object({
    name: z.string(),
    value: z.string(),
  }),
  picture: z.object({
    large: z.string().url(),
    medium: z.string().url(),
    thumbnail: z.string().url(),
  }),
  nat: z.string(),
});

export const apiSchema = z.object({
  results: z.array(userSchema),
  info: z.object({
    seed: z.string(),
    results: z.number(),
    page: z.number(),
    version: z.string(),
  }),
});
