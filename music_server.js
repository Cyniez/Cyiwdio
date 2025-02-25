const NodeMediaServer = require("node-media-server");

const config = {
  http: {
    port: 8000,
    allow_origin: "*",
    mediaroot: "./media",
  },
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 10,
    ping_timeout: 60,
  },
  trans: {
    ffmpeg: "./ffmpeg",
    tasks: [
      {
        app: "live",
        hls: true,
        hlsFlags: "[hls_time=2:hls_list_size=3:hls_flags=delete_segments]",
        hlsKeep: false,
      },
    ],
    MediaRoot: "./media",
  },
};

const nms = new NodeMediaServer(config);
nms.run();