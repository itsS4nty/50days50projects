import React, { useState } from 'react';
import Image from './Image';
import '../styles/images.css';

const Images = () => {
	const [images, setImages] = useState([
		{
			id: 1,
			image: 'https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg',
			alt: 'ReactJS logo wallpaper',
			active: true,
		},
        {
			id: 2,
			image: 'https://wallpapercave.com/wp/wp4923981.jpg',
			alt: 'React wallpaper space',
			active: false,
		},
		{
			id: 3,
			image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&w=1000&q=80',
			alt: 'Code ReactJS',
			active: false,
		},
		{
			id: 4,
			image: 'https://img2.wallspic.com/crops/4/8/2/7/6/167284/167284-react_js-react-javascript-javascript_library-next_js-5184x3456.jpg',
			alt: 'ReactJS project on Visual Studio Code',
			active: false,
		},
		{
			id: 5,
			image: 'https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg',
			alt: 'ReactJS fan design logo',
			active: false,
		},
	]);

	const handleOnClick = (id: number, active: boolean) => {
        if(active) return;

        setImages(images.map((image) => {
            image.active = image.id === id;
            return image;
        }));
	};

	return (
		<div className='images-container'>
			{images.map((image) => (
				<Image
					key={image.id}
                    id={image.id}
					image={image.image}
					alt={image.alt}
					active={image.active}
					handleOnClick={handleOnClick}
				/>
			))}
		</div>
	);
};

export default Images;
