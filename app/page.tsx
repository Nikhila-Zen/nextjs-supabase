'use client';

import { useState } from "react";
import Card from "@/components/Card";
interface HomeProps {
  searchParams: Record<string, any>;
}

export default function Home({searchParams}: HomeProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [names, setNames] = useState(['Alice', 'Bob', 'Charlie'])
  const name = 'Nikhi'
  const handleClick = () => {
    setIsVisible(!isVisible);
  }
  const handleAdd = () => {
    setNames([...names, 'New Name!'])
  }
  const cards = isVisible
    && names.map((name, index) => <Card key={index} className="">{name}</Card>)
  console.log(searchParams)
  return (
    <>
    <div className="flex flex-col">
        <div>Hello {name}</div>
        {cards}
        <div>
          <button onClick={handleClick}>
            {isVisible ? 'Hide' : 'Show'}
          </button>
          <button onClick={handleAdd}>Add Name</button>
        </div>
    </div>
    </>
  );
}
