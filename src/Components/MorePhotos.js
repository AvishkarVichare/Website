import React, { useState ,useCallback } from 'react'
import '../css/morePhotos.css'
import ImageViewer from "react-simple-image-viewer";

const MorePhotos = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = props.category;
  
    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };
  
    return (
        <div className='category'>
        <h2>
              {props.heading}
          </h2>
      <div className='gallery'>
          
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            key={index}
            style={{ margin: "2px" }}
            alt=""
          />
        ))}
  
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)"
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
      </div>

    );
//   return (

    // <div>
    //         <div className='photosContainer'>

    // {photoData.map(e=>{
    //     return(
    //         <div>
    //             <img src={e.image} alt="photo" />
    //         </div>
    //     )
    // })}
    // </div>

    // </div>
    <>
    {/* <ImgsViewer
    imgs={photoData}
    currImg={state.currImg}
    isOpen={state.viewerIsOpen}
    onClickPrev={gotoPrevious}
    onClickNext={gotoNext}
    onClose={closeViewer}
//   /> */}
    </>

//   )
}

export default MorePhotos