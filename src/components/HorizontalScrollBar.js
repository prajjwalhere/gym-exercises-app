import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

import RightArrowIcon from '../assets/right-arrow.png';
import LeftArrowIcon from '../assets/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {isBodyParts ? (
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollBar;