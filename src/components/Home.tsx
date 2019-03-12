import React, { Component } from 'react';
import {MeetingOfficeAdminScreen1, IMeetingAdminUploaderProps} from './MeetingOfficeAdminScreen';

export default function Home()
{

  const meetingAdminUploader: IMeetingAdminUploaderProps = {
          uploaded:false
  };

          return(
            <div>
             <MeetingOfficeAdminScreen1 {...meetingAdminUploader}  />
            
          </div> 
        );
 
}

