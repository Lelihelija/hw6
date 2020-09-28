import React, { Component } from 'react';
import { connect } from 'react-redux';
// import addPostReducer from '../redux/add-post-reducer';
import addPost from '../redux/add-post-action';
import {passNewDataToPost, selectName} from '../redux/post-interactions-action';

let users = [
    {
        isActive: 'false',
        id: 5,
        username: 'Хіната Іванович',
    },
    {
        isActive: 'false',
        id: 6,
        username: 'Цукі Григорович',
    },
    {
        isActive: 'false',
        id: 7,
        username: 'Даічі Мирославович',
    },
    {
        isActive: 'false',
        id: 8,
        username: 'Ю Нішиноя Батькович',
    },
];

// let date = setDate();

class NewPostForm extends Component {

    state = {
        name: "",
        content: {
            text: "",
          },
          image: {
            src: "",
          },
        //   date: setDate(),
      };
    
    selectName = (event) => {
        this.setState({
          name: event.currentTarget.value,
        });
    };
    
    selectImage = (event) => {
        this.setState({ image: { ...this.state.image, src: event.currentTarget.value,} });
    };

    typedText = (event) => {
        this.setState({ content: { ...this.state.content, text: event.currentTarget.value,} });
    };

    addNewPostFn = (e) => {
        this.props.addPost(this.state);
    }

    render() {

        return (
            <div className="new-post-form-wrapper">
                <div className="inputs-wrapper">
                    <div className="new-user-post">
                        <label className="new-user-label">Choose a username:</label>
                        <select className="new-user-option" onChange={this.selectName.bind(this)} value={this.state.name} name="user" id="users">
                            {users.map((user,index) => (
                                <option className="new-user-option"  key={user.id} state={user.isActive} >{user.username}</option>
                            ))}
                        </select>
                        <input className="new-post-items image-link" onChange={this.selectImage.bind(this)} value={this.state.image.src} type="url" name="url" placeholder="Paste a photo link here or choose one" list="defaultURLs"/>
                        <datalist id="defaultURLs">
                            <option value="https://s.yimg.com/aah/computergear/r2d2-dalek-loved-star-trek-t-shirt-26.gif"/>
                            <option value="https://www.geekalerts.com/u/Doctor-Who-Star-Wars-Darthmen-T-Shirt.jpg"/>
                            <option value="https://i.pinimg.com/originals/80/8b/ce/808bce96f0e3b7149bbae9a81c307e21.png"/>
                        </datalist>
                        <textarea className="textarea new-post-items" name="addText" id="" onChange={this.typedText.bind(this)} value={this.state.content.text} rows="5" placeholder="type your message here"></textarea>
   {/* onChange={(e) => this.props.addPost(e.target.value)}  */}
                    </div>
                    <div className="new-post-btn-wrapper">
                        <button type="button" className="new-post-btn new-post-items" onClick={this.addNewPostFn}>Add new post</button>
                    </div>
                </div>
            </div>
        )
    }
}

const getStateToProps = (state) => {
    return {
        post: state.addPostReducer,
        // data: state.getNewDataReducer,
    }
}

const getDispatchToProps = (dispatch) => {
    return {
        addPost: e => dispatch(addPost(e)),
        // passNewDataToPost: () => dispatch(passNewDataToPost())
    }
}

export default connect(getStateToProps, getDispatchToProps)(NewPostForm);