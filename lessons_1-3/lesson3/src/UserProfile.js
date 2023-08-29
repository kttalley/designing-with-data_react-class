import React from "react";
import styled from 'styled-components';
import './user-profile.css';
import userData from './data.js';

function UserProfile(props) {
    return (
        <UserProfileContainer>
            <UserProfileStatus status={props.user.status} />

            {/* avatar placeholder logic below: 
            if there is a picture, display a <UserProfileAvatar /> component
            Else, use the placeholder component  */}
            { props.user.picture.medium ? (
                <UserProfileAvatar
                    src={props.user.picture.medium}
                    alt={`${props.user.name.first} ${props.user.name.last}`}
                />
            ) : (
                <Placeholder first={props.user.name.first} last={props.user.name.last} />
                
            )}

            <UserProfileName>
                {`${props.user.name.first} ${props.user.name.last}`}
            </UserProfileName>
            <UserProfileLocation>
                {`${props.user.location.city} ${props.user.location.state}`}
            </UserProfileLocation>
        </UserProfileContainer>
    );
}

// lesson 2 method of placeholder component construction
// const Placeholder = function(props) {
//     const first = props.first.charAt(0).toUpperCase();
//     const last = props.last.charAt(0).toUpperCase();

//     return (
//         <div className="user-profile-placeholder">{first + last}</div>
//     )
// }

//styled component method

const Placeholder = styled.div`
    background-color: #333;
    /* padding: 19px 19px; */
    letter-spacing: 0;
    height: 65px;
    width: 65px;
    margin: 0 auto;
    border-radius: 100px;
    color: #aaa;
    font-weight: bold;
`;

const UserProfileContainer = styled.div`
    -webkit-text-fill-color: white;
    background-color: #222;
    display: inline-block;
    margin: 20px;
    padding: 25px 10px;
    border-radius: 10px;
    text-align: center;
    transition: 0.15s transform ease;
    cursor: pointer;
    width: 140px;
    position: relative;
    min-height: 140px;

    &:hover {
        transform: scale(1.1);
    }
`;

const UserProfileAvatar = styled.img`
    border-radius: 100px;
    margin: 0 auto;
    display: block;
    width: 65px;
`;

const UserProfileName = styled.h2`
    font-size: 15px;
    text-transform: capitalize;
    margin-bottom: 5px;
`;

const UserProfileLocation = styled.p`
    text-transform: capitalize;
    opacity: 0.4;
    margin-top: 0;
    font-size: 13px;
    text-align: center;
    display: inline-block;
    margin-bottom: 0;
    width: 120px;
`;

const UserProfileStatus = styled.div`
    width: 8px;
    height: 8px;
    background-color: ${ props => statusMap[props.status] ? statusMap[props.status] : statusMap["none"]};
    border-radius: 10px;
    position: absolute;
    left: 12px;
    top: 12px;
`;

const statusMap = {
    active: "#1AF042",
    inactive: "#F0AA1A",
    none: "#4A4A4A"
}


export default UserProfile;
