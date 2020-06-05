import React from "react";
import { server } from "../../lib/api/server";
import {
  ListingsData,
  DeleteListingsData,
  DeleteListingVariables,
} from "./types";

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      rating
    }
  }
`;

const DELETE_LISTINGS = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
      title
    }
  }
`;

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({
      query: LISTINGS,
    });
    console.log(data);
  };

  const deleteListings = async () => {
    const { data } = await server.fetch<
      DeleteListingsData,
      DeleteListingVariables
    >({
      query: DELETE_LISTINGS,
      variables: {
        id: "5ecebd07e484fbb5b8dfed3b",
      },
    });
    console.log(data);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query Listings!</button>
      <button onClick={deleteListings}>Delete a Listings!</button>
    </div>
  );
};
