import { useUser } from "@clerk/nextjs";
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

const StreamVideoProvider = (children: React.ReactNode) => {
  const [videClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey) throw new Error("Stream Api key Missing");
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      token,
    });
  }, [user, isLoaded]);
  return <StreamVideo client={videClient}></StreamVideo>;
};

export default StreamVideoProvider;
