files = ["1675354384929-de8e880d-3a37-4149-baba-b3f1aa77cee1-cam-audio-1675354437725", 
    "1675354384929-b0676062-72d5-406d-ab6f-e0c84aaa477e-cam-video-1675354389679",
    "1675354384929-1e60214d-05d1-401e-9bd9-d117f5bec0f0-cam-video-1675354390750",
    "1675354384929-b0676062-72d5-406d-ab6f-e0c84aaa477e-cam-audio-1675354389677",
    "1675354384929-47a59e44-d826-490a-bbb8-466ee00c3694-cam-video-1675354385946",
    "1675354384929-47a59e44-d826-490a-bbb8-466ee00c3694-cam-audio-1675354385943",
    "1675354384929-1e60214d-05d1-401e-9bd9-d117f5bec0f0-cam-audio-1675354390747",
    "1675354384929-de8e880d-3a37-4149-baba-b3f1aa77cee1-cam-video-1675354437728"]

# pair videos by participant
# for each participant combine videos and combine audios based on timestamp then run map command

files_dicts = []
participants = []
for file in files:
    split = file.split("-")
    start = split[0]
    participant = split[1] + "-" + split[2] + "-" + split[3] + "-" + split[4] + "-" + split[5]
    type = split[7]
    trackStart = split[8]
    dict = {
        "file": file,
        "start": start,
        "participant": participant,
        "type": type,
        "trackStart": trackStart
    }
    files_dicts.append(dict)
    if participants.count(participant) == 0:
        participants.append(participant)

for participant in participants:
    videos = []
    audios = []
    for dict in files_dicts:
        if dict.get("participant") == participant:
            if dict.get("type") == "video":
                videos.append({"trackStart": dict.get("trackStart"), "file": dict.get("file")})
            elif dict.get("type") == "audio":
                audios.append({"trackStart": dict.get("trackStart"), "file": dict.get("file")})
    audios.sort(key=lambda k : k['trackStart'])
    videos.sort(key=lambda k : k['trackStart'])
    #TODO combine then map
    