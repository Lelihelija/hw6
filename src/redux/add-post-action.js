import { ADD_POST } from "./types";

const addPost = ( post ) => {
    return {
        type: ADD_POST,
        payload: post,
    }
}

export default addPost;