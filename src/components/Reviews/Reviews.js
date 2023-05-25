import React from 'react';
import './Review.css';
import boy from '../../images/boy.jpg';
import girl from '../../images/girl.jpg';
import girl1 from '../../images/girl1.jpg';
import girl2 from '../../images/girl2.jpg';



const reviews = [
	{
		image: {boy},
		name: 'Tony',
		reviewText: 'Review rext rext lorem ipsudolar',
	},
	{
		image: {girl},
		name: 'Ridl',
		reviewText: 'Review rext rext lorem ipsudolar',
	},
	{
		image: {girl1},
		name: 'Jen',
		reviewText: 'Review rext rext lorem ipsudolar',
	},
	{
		image: {girl2},
		name: "Sven",
		reviewText: 'Review rext rext lorem ipsudolar',
	},
];

const ReviewCard = ({ props }) => {
	return (
		<div className='app__testimonials-review'>

			<div className='app__testimonials-name-image'>
				<img
					className='app__testimonial-review-image'
					src={props.image}
					alt={props.name}
				/>
				<h6 className='app__testimonials-review-name'>{props.name}</h6>
			</div>
			<p className='app__testimonials-review-text'>{props.reviewText}</p>
		</div>
	);
};
const Review = () => {
	return (
		<div className='app__testimonials-content'>
			<h1 className='app__testimonals-title'>Reviews</h1>
			{/* <ReviewCard /> */}
			<div className='app__testimonial-review-card'>
				{reviews.map((review) => {
					return (
							<ReviewCard props={review} />
					);
				})}
			</div>
		</div>
	);
};

export default Review

