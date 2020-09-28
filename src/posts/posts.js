import React from "react";
import Post from './post.js'
import './styles.css';
import NewPostForm from './newPostForm';
import { useSelector } from 'react-redux';


const Posts = () => {
	
	let authors = useSelector(state => state.addPostReducer.authors);
	
	return (
		<>
			<div className="posts-wrapper">
				<NewPostForm/>
			</div>
			<div className="posts-wrapper">
				{ authors.map((author, index) => <Post key={index} {...author}/>)}
			</div>
		</>
	) 
}; 

export default Posts;