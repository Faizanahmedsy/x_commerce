"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star } from "lucide-react";
import Section from "../shared/Section";
import { AnimatedCard } from "../shared/AnimatedCard";
import useGlobalState from "@/store";

const ProductCard = ({
  id,
  name,
  description,
  price,
  rating,
  bgColor,
  iconColor,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  bgColor: string;
  iconColor: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useGlobalState();

  const handleAddToCart = () => {
    addItem({ id, name, description, price, rating, quantity });
  };

  return (
    <motion.div
      className="relative bg-white rounded-xl overflow-hidden shadow-lg"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className={`relative aspect-w-4 aspect-h-3 ${bgColor} flex items-center justify-center`}
      >
        <ShoppingCart className={`w-24 h-24 ${iconColor}`} />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.button
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className="w-5 h-5 text-red-500" />
        </motion.button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                index < rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill={index < rating ? "currentColor" : "none"}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">${price}</span>
          <motion.button
            className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
            whileHover={{ scale: 1.05, backgroundColor: "#4338ca" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </motion.button>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-sm text-gray-600 mr-2">Quantity:</span>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-12 border border-gray-300 rounded p-1"
          />
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function Products() {
  const products = [
    {
      id: "1",
      name: "Cheat your partner",
      description: "Elegant timepiece for any occasion",
      price: 299,
      rating: 4,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      id: "2",
      name: "Smoke Cigrates",
      description: "Stylish protection for your eyes",
      price: 159,
      rating: 5,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      id: "3",
      name: "Drink Alcohol or Take Drugs",
      description: "Classic accessory for the modern individual",
      price: 79,
      rating: 4,
      bgColor: "bg-brown-100",
      iconColor: "text-brown-500",
    },
    {
      id: "4",
      name: "Scroll Reels",
      description: "Crystal-clear audio on the go",
      price: 129,
      rating: 4,
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      id: "5",
      name: "Smart Fitness Tracker",
      description: "Your personal health companion",
      price: 99,
      rating: 5,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
    },
    {
      id: "6",
      name: "Gourmet Coffee Maker",
      description: "Barista-quality brews at home",
      price: 199,
      rating: 4,
      bgColor: "bg-red-100",
      iconColor: "text-red-500",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-12 text-start">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <AnimatedCard
        data={{
          img: "/images/hero.jpg",
          title: "Shop Fullfilment",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in quam ut libero ultrices.",
        }}
        className="mt-12"
      />
    </div>
  );
}
