# Deliberation Video Coding

**This project is an interface for participants to complete live video and audio behavioral coding.**

## Admin console

```
http://localhost:3000/admin
```

If running on another domain, append `/admin` to the url for the participant interface.

Go to "New Batch" and select the treatments you want to include.
Using "complete" lets you select how many games you want of each treatment, using "simple" just creates one game of each treatment.

Generally it is reasonable to have a single game of each treatment (if you want balanced numbers of participants in each condition)
and then run multiple batches. This means that as players arrive, they will first be randomized to games within the first batch,
and then overflow to subsequent batches. Players are randomized on arrival, not on when they finish the into steps, so it is possible that
for batch with 2 games of 2 players each, the first 4 players to arrive will not fill out those slots, and instead someone may get bumped to
the next batch. (in that batch, they'll be assigned to the same treatment condition).

## Development

The app can be started with ```npm start``` from the deliberation-video-coding directory, which will start both Docker and the application.

## Features
This experiment features two stages - an initial Survey and a Live Annotation. Other features include
- Multiple video and audio streams
- Separate video and audio streams
- Audio toggle on/off
- Customized video control bar - play/pause forward/backward seeking

### Survey
In the Survey stage, participants view the entire video(s) and answer a series of generic questions about what they viewed. Responses are 
stored in the ```playerStage``` object and are exported when the stage is submitted.

### Live Annotation
During Live Annotation, participants tag each behavioral code to a timestamp in the video. When participants begin typing the video automatically 
stops while participants enter the code.  The video then resumes when the participant submits the codes for the timestamp.  Data is stored in the 
```playerStage``` object and is exported when the stage is submitted. When participants are done adding codes, they can elect to end the experiment.

## Data 
Data is exported from the ```playerStage``` object when each stage is submitted to a jsonl file in the data/scienceData directory.