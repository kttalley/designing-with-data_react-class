import React from 'react';
import Styled, { css } from 'styled-components'



const Icon = function(props) {
    const {name, context, color="white", size=16, ...rest} = props;
    const Drawing = IconMap[name] ? IconMap[name] : null;
    const iconStyles = {
        ...(context === 'btn' && {
            marginRight: '200px',
            color: "red",
            padding: '8px',
            size: '500px'
            
        }),
    }

    return (
        <svg
            width="200px"
            height={size}
            marginRight="20px"
            {...rest}
            viewBox="0 0 32 32"
        >
            <Drawing color={color} />
        </svg>
        
    );
    
}

function Add(props) {
    return (
        <path fill={props.color} d="M18.6025 16.2451C15.8604 16.2451 13.5879 13.8203 13.5879 10.6846C13.5752 7.65039 15.8857 5.25098 18.6025 5.25098C21.332 5.25098 23.6172 7.625 23.6172 10.6719C23.6172 13.8203 21.3447 16.2451 18.6025 16.2451ZM18.5898 18.5176C25.1406 18.5176 29.2158 23.0117 29.2158 26.2744C29.2158 27.3789 28.5049 27.874 26.7783 27.874H15.4033C15.5303 27.3408 15.5938 26.7695 15.5938 26.1982C15.5938 23.6973 14.4004 21.4756 12.5596 20.0537C14.1719 19.127 16.2158 18.5176 18.5898 18.5176ZM7.79883 32.5078C4.3457 32.5078 1.48926 29.6641 1.48926 26.1982C1.48926 22.7324 4.3457 19.876 7.79883 19.876C11.2646 19.876 14.1211 22.7324 14.1211 26.1982C14.1211 29.6514 11.2393 32.5078 7.79883 32.5078ZM7.81152 30.3496C8.20508 30.3496 8.52246 30.0703 8.52246 29.6641V26.8584H11.125C11.5059 26.8584 11.8105 26.5664 11.8105 26.1855C11.8105 25.8047 11.5059 25.5127 11.125 25.5127H8.52246V22.7197C8.52246 22.3008 8.20508 22.0342 7.81152 22.0342C7.41797 22.0342 7.10059 22.3008 7.10059 22.7197V25.5127H4.48535C4.11719 25.5127 3.8125 25.8047 3.8125 26.1855C3.8125 26.5664 4.11719 26.8584 4.48535 26.8584H7.10059V29.6641C7.10059 30.0703 7.41797 30.3496 7.81152 30.3496Z"></path>
    )
}


function Pin(props) {
    return (
        <path fill={props.color} d="M28.1831 13.4035C28.601 12.9858 28.9325 12.49 29.1587 11.9442C29.3849 11.3984 29.5014 10.8134 29.5015 10.2226C29.5016 9.63174 29.3853 9.0467 29.1592 8.50084C28.9332 7.95498 28.6019 7.45899 28.1841 7.0412L24.9849 3.82147C24.1379 2.97781 22.9906 2.50501 21.7951 2.50703C20.5997 2.50904 19.454 2.9857 18.6099 3.83221L14.354 8.35272C14.2599 8.44609 14.1326 8.49847 14 8.49847C13.8674 8.49847 13.7402 8.44609 13.646 8.35272C13.2271 7.93628 12.7279 7.60921 12.1789 7.39132C11.6298 7.17344 11.0422 7.06928 10.4517 7.08514C9.25462 7.11643 8.11615 7.60989 7.27491 8.46209L3.93702 11.9504C3.65616 12.2318 3.49835 12.6131 3.49816 13.0107C3.49797 13.4083 3.65543 13.7898 3.93602 14.0715L10.2144 20.3666L2.29341 28.2931C2.20056 28.386 2.12691 28.4962 2.07666 28.6175C2.02641 28.7389 2.00055 28.8689 2.00055 29.0002C2.00055 29.1315 2.02641 29.2615 2.07666 29.3828C2.12691 29.5041 2.20056 29.6144 2.29341 29.7072C2.38626 29.8001 2.49649 29.8737 2.6178 29.924C2.73911 29.9742 2.86913 30.0001 3.00044 30.0001C3.13175 30.0001 3.26177 29.9742 3.38308 29.924C3.5044 29.8737 3.61462 29.8001 3.70747 29.7072L11.6266 21.7825L17.8891 28.0617C18.0288 28.2015 18.1948 28.3122 18.3775 28.3877C18.5602 28.4631 18.7559 28.5016 18.9536 28.5012C19.1477 28.5019 19.3402 28.4644 19.5198 28.3906C19.6995 28.3169 19.8628 28.2084 20.0004 28.0715L23.5463 24.718C24.4021 23.8866 24.8934 22.7498 24.9124 21.5568C24.9315 20.3638 24.4767 19.212 23.6479 18.3537C23.555 18.2608 23.5025 18.135 23.5015 18.0036C23.5006 17.8722 23.5515 17.7458 23.643 17.6515L28.1831 13.4035Z"></path>
    )
}
function Cancel(props) {
    return (
        <path fill={props.color} d="M29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16ZM16.9957 6.9078C16.9481 6.39344 16.5166 6 16 6C15.4834 6 15.0519 6.39344 15.0043 6.9078L14.438 13.0238L13.796 12.3818L13.6593 11.265C13.5997 10.7785 13.1962 10.4068 12.7064 10.3873C12.4524 10.3772 12.2141 10.4634 12.0298 10.6156L9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.95024 8.63555 7.90824 9.16501 8.16689 9.55346L22.4466 23.8331C22.835 24.0918 23.3645 24.0498 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L21.6914 20.2772C21.812 20.1618 21.9048 20.0154 21.9562 19.8473L22.6544 17.5661C22.8345 17.7326 23.0745 17.8319 23.3333 17.8319H26C26.5523 17.8319 27 17.3842 27 16.8319C27 16.2796 26.5523 15.8319 26 15.8319H24.118L23.638 13.8714C23.5309 13.4342 23.145 13.1224 22.6951 13.1096C22.2452 13.0968 21.8422 13.3862 21.7105 13.8166L21.194 15.5038L20.3131 11.1866C20.2151 10.7063 19.7834 10.3679 19.2936 10.3873C18.8038 10.4068 18.4003 10.7785 18.3407 11.265L17.8046 15.6439L16.9957 6.9078ZM18.9044 23.1194L16.2417 20.4567L16.6709 25.0922C16.718 25.6009 17.1411 25.9924 17.6519 25.9999C18.1628 26.0074 18.5972 25.6287 18.6593 25.1215L18.9044 23.1194ZM15.7993 20.0142L10.8878 15.1028L10.806 15.5038L10.593 14.808L8.96462 13.1796C8.67 13.2965 8.4407 13.5501 8.36203 13.8714L7.88198 15.8319H6C5.44772 15.8319 5 16.2796 5 16.8319C5 17.3842 5.44772 17.8319 6 17.8319H8.66667C8.92551 17.8319 9.16553 17.7326 9.3456 17.5661L10.0438 19.8473C10.1776 20.2846 10.5911 20.5754 11.0478 20.5535C11.5046 20.5316 11.8884 20.2026 11.9798 19.7545L12.4197 17.5986L13.3407 25.1215C13.4028 25.6287 13.8372 26.0074 14.3481 25.9999C14.8589 25.9924 15.282 25.6009 15.3291 25.0922L15.7993 20.0142ZM19.7257 18.3115L19.5184 18.1042L19.5803 17.5986L19.7257 18.3115Z"/>
    )
};




const IconMap = {
    "add": Add,
    "pin": Pin,
    "cancel": Cancel,
};


export default Icon;




