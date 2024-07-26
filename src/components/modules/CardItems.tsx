"use client";

import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import useGlobalState from "@/store";

type Props = {};

const CardItems = ({}: Props) => {
  const { cart, removeItem } = useGlobalState();

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CardItem
            key={item.id}
            title={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
            onRemove={() => removeItem(item.id)}
          />
        ))
      )}
    </div>
  );
};

const CardItem = ({
  title,
  description,
  price,
  quantity,
  onRemove,
}: {
  title: string;
  description: string;
  price: number;
  quantity: number;
  onRemove: () => void;
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-gray-500">Quantity: {quantity}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-lg font-semibold">${price}</p>
        <Button variant="destructive" onClick={onRemove}>
          <Trash2 className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CardItems;
