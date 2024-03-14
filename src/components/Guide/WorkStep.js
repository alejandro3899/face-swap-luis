import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
export default function WorkStep() {
  return (
    <>
        <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            >
            9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
                <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="subtitle" component="span">
                Upload Selfie
            </Typography>
            <Typography>Upload an hd selfi photo of your model, it has the most affect of video quality</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="subtitle" component="span">
                Find Videos
            </Typography>
            <Typography>Upload an hd selfi photo of your model, it has the most affect of video quality</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="subtitle" component="span">
                Clone
            </Typography>
            <Typography>Upload an hd selfi photo of your model, it has the most affect of video quality</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            Confirmation
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
                <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Confirm and wait 2min for the results, you can see them on the videos page
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
                <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
        </TimelineItem>
        </Timeline>
        <Button sx={{ mt: 2 }} variant="contained" color="success">
            Generate Now
        </Button>
    </>
  );
}