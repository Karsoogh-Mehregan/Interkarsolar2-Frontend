import Konva from 'konva';
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import useImage from 'use-image';

// normal: http://s6.uplod.ir/i/01009/06izcdyx5i4f.png
// red: http://s6.uplod.ir/i/01009/zxm8lz2s3l1o.png
// green: http://s6.uplod.ir/i/01009/7r7v57xmqt7i.png

const PersonImage = ({ isSelected, ...rest }) => {
  const [image] = useImage('http://s6.uplod.ir/i/01009/06izcdyx5i4f.png ');
  return <Image shadowBlur={isSelected ? 1 : 8} {...rest} image={image} />;
};

function Person({ id, x, y, name, patience, isSelected, selectPerson, unselectPerson }) {
  const [scale, setScale] = useState(1);

  useEffect(
    () => {
      const isMobile = window.innerWidth <= 800;
      if (isSelected) {
        if (isMobile) {
          setScale(0.5);
        } else {
          setScale(0.7)
        }
      } else {
        if (isMobile) {
          setScale(0.4);
        } else {
          setScale(0.6)
        }
      }
    }
    , [isSelected, scale])

  const handleClick = () => {
    if (isSelected) {
      unselectPerson(id);
    } else {
      selectPerson(id);
    }
  }

  return (
    <Layer draggable onClick={handleClick} offsetX={50} offsetY={140} x={x} y={y} scaleX={scale} scaleY={scale}>
      <Text text={patience} height={30} width={100} fontSize={30} verticalAlign='center' align='center' />
      <Text text='صبر' height={20} width={100} y={25} fontSize={20} verticalAlign='center' align='center' />
      <PersonImage width={100} height={200} y={50} isSelected={isSelected} />
      <Text text={name} width={300} height={30} x={-100} fontSize={25} y={250} verticalAlign='center' align='center' />
      {/* <Text text={info} width={100} height={30} fontSize={15} y={290} verticalAlign='center' align='center' /> */}
    </Layer>
  )
}

export default Person;
