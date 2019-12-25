import React from 'react';
import {SocialIcon} from 'react-social-icons';

function SocialIcons() {
    return (
        <div>
            <SocialIcon network="twitter" url="http://twitter.com/" bgColor="lightgray" className="mr-2"></SocialIcon>
            <SocialIcon network="facebook" url="http://facebook.com/" bgColor="lightgray" className="mr-2"></SocialIcon>
            <SocialIcon network="snapchat" url="http://snapchat.com/" bgColor="lightgray" className="mr-2"></SocialIcon>
            <SocialIcon network="instagram" url="http://instagram.com/" bgColor="lightgray" className="mr-2"></SocialIcon>
            <SocialIcon network="google" url="http://google.com/" bgColor="lightgray" className="mr-2"></SocialIcon>
            <SocialIcon network="reddit" url="http://reddit.com/" bgColor="lightgray" className="mr-2"></SocialIcon>
        </div>
    )
}

export default SocialIcons;
