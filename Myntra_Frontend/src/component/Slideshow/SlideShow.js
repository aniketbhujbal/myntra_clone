import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import style from './Slideshow.module.css';
import data from '../../Data.json';
import { Container } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { Box, Typography, IconButton } from '@mui/material';


const Slideshow = () => {
  const [jsondata, setjsonData] = useState([])

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images,setImages]=useState([])
    useEffect(() => {
      const apiUrl = "https://myntra-data.onrender.com/slideshow";
    
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setjsonData(data);
    
          const imageUrls = data.map((item) => item.imageUrl);
          setImages(imageUrls);
          console.log("Images", imageUrls);
          console.log("Current Image", imageUrls[currentImageIndex]);
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      };
    
      fetchData();
    }, []);
    

  useEffect(() => {
    console.log("afafaf",images)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };



  return (
    <div>
        <Box sx={{ marginTop: '20px' }}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '400px' }}>
            {/* Slideshow */}
            
            <Box sx={{ width: '100%' }}>
              <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex}`}
                style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'fill' }}
              />
            </Box>
          </Box>
          {/* Navigation Arrows */}
          <IconButton
            sx={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
            onClick={handlePrevious}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton
            sx={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
            onClick={handleNext}
          >
            <NavigateNextIcon />
          </IconButton>
        </Container>
      </Box>
    </div>
  )
}

export default Slideshow;
