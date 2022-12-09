export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI4NGFmYTdlZS05YWI3LTRiNDktOTRhMy05YjhiYTM2NGUwODIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3MDQ2MjM0NywiZXhwIjoxNjczMDU0MzQ3fQ.C9HtYT_eJi2CY7hOD_WlkoAHd5Dp3QyHRmbJg24fr_Y";

// API call to create meeting
export const createMeeting = async () => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "us001" }),
  });
  const { meetingId } = await res.json();
  return meetingId;
};

// API call to fetch latest downstream url for a meeting session
export const fetchHlsDownstreamUrl = async ({ meetingId }) => {
  const res = await fetch(
    `https://api.videosdk.live/v2/hls/?roomId=${meetingId}`,
    {
      method: "GET",
      headers: {
        authorization: `${authToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  const json = await res.json();

  const downstreamUrl  = json?.data[0];

  return downstreamUrl
};