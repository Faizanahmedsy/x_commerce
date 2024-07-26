import React from "react";
import { Button } from "../ui/button";
import { Delete, Trash, Trash2, Trash2Icon } from "lucide-react";

type Props = {};

export default function CardItems({}: Props) {
  return (
    <div>
      <CardItem
        title="Apple Watch"
        description="Series 7"
        price={399}
        image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
      />
      <CardItem
        title="Apple Watch"
        description="Series 7"
        price={399}
        image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
      />
      <CardItem
        title="Apple Watch"
        description="Series 7"
        price={399}
        image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
      />
    </div>
  );
}

const CardItem = ({
  title,
  description,
  price,
  image,
}: {
  title: string;
  description: string;
  price: number;
  image: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={image} alt={title} className="w-16 h-16" />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">${price}</p>
      </div>

      {/* //remove from cart button  */}
      <Button variant={"destructive"}>
        <Trash2 />
      </Button>
    </div>
  );
};
