import React from "react";

import Slider from "react-slick";

const SliderComponent = () => {
	const settings = {
		lazyLoad: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<Slider {...settings} className='slider my-3 w-100'>
			<img
				className='img-slider'
				src='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/slideshow%2Fs1.jpg?alt=media&token=19fc688d-bec2-443e-a448-c38c90804d08'
				alt='instagram1'
			/>
			<img
				className='img-slider'
				src='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/slideshow%2Fs2.jpg?alt=media&token=efb4e488-f6d5-4cb6-9434-8da3d38ff9ff'
				alt='instagram2'
			/>
			<img
				className='img-slider'
				src='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/slideshow%2Fs3.jpg?alt=media&token=45042f27-4611-4713-92e2-8497fbffb639'
				alt='instagram3'
			/>
			<img
				className='img-slider'
				src='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/slideshow%2Fs4.jpg?alt=media&token=2318539c-c0e8-40e9-8b31-1c8b5fddcda0'
				alt='instagram4'
			/>
			<img
				className='img-slider'
				src='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/slideshow%2Fs5.jpg?alt=media&token=1d37b4ba-aaa2-4700-899e-bf8bc826bd12'
				alt='instagram5'
			/>
			<img
				className='img-slider'
				src='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/slideshow%2Fs6.jpg?alt=media&token=56eb7b22-5371-4fdc-8c4c-24da31033978'
				alt='instagram6'
			/>
			<img
				className='img-slider'
				src='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/slideshow%2Fs7.jpg?alt=media&token=66fecd6f-0c6c-4ff9-ad28-0fea7319d958'
				alt='instagram7'
			/>
			<img
				className='img-slider'
				src='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/slideshow%2Fs8.jpg?alt=media&token=91b974a9-380f-4994-813a-7f6735fb0037'
				alt='instagram8'
			/>
			<img
				className='img-slider'
				src='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/slideshow%2Fs9.jpg?alt=media&token=b152e4ed-4514-4fc7-aa24-e418622b83c1'
				alt='instagram9'
			/>
			<img
				className='img-slider'
				src='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/slideshow%2Fs10.jpg?alt=media&token=69a1f592-7df5-407a-8f4d-583d433b88aa'
				alt='instagram10'
			/>
		</Slider>
	);
};

export default SliderComponent;
