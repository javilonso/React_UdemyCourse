import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {

    return(
        <div className="ui container comments">

            <ApprovalCard>
                <h4>Warning</h4>
                Are u sure you want to do this?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    comment="Awesome" 
                    mypic = {faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 6:45PM" 
                    comment="Amazing" 
                    mypic = {faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Mary" 
                    timeAgo="Today at 8:45PM" 
                    comment="Nice!"  
                    mypic = {faker.image.avatar()} 
                />
            </ApprovalCard>

            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));


