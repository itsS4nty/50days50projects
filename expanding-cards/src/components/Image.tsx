import React from 'react';
import '../styles/image.css';

type ImageProps = {
	id: number;
	image: string;
	alt: string;
	active: boolean;
	handleOnClick: (id: number, active: boolean) => void;
};

const Image = ({ id, image, alt, active, handleOnClick }: ImageProps) => {
	return (
		<div
			className={`image-container ${active && 'image-active'}`}
			onClick={() => handleOnClick(id, active)}
		>
			<img className='image' src={image} alt={alt} />
            <span className={`image-text ${active && 'image-text-active'}`}>{alt}</span>
        </div>
	);
};

export default Image;
