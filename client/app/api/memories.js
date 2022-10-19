import client from "./client";

const getMemories = () => client.get("/memory/list");

const addMemory = (memory, tool, onUploadProgress) => {
  const data = new FormData();
  data.append("title", memory.title);
  data.append("tool", memory.tool);
  data.append("date_created", memory.date);
  data.append("schedule", memory.schedule.id);

  if (memory.location) data.append("location", JSON.stringify(memory.location));

  if (tool === "image") {
    memory.content.forEach((image, index) =>
      data.append("content", {
        name: "image" + index,
        type: "image/jpeg",
        uri: image,
      })
    );
  } else if (tool === "quote") {
    data.append("content", JSON.stringify(memory.content));
  } else {
    data.append("content", memory.content);
  }

  console.log(data);

  return client.post("/memory/create", data, {
    onUploadProgress:
      tool === "image"
        ? (progress) => onUploadProgress(progress.loaded / progress.total)
        : null,
  });
};
// const addImageMemory = (memory, onUploadProgress) => {
//   const data = new FormData();
//   data.append("title", memory.title);
//   data.append("tool", memory.tool);
//   data.append("date_created", memory.date);
//   data.append("schedule", memory.schedule.id);

//   if (memory.location) data.append("location", JSON.stringify(memory.location));

//   memory.content.forEach((image, index) =>
//     data.append("content", {
//       name: "image" + index,
//       type: "image/jpeg",
//       uri: image,
//     })
//   );
//   // data.append("content", memory.content);

//   console.log(data);

//   return client.post("/memory/create", data, {
//     onUploadProgress: (progress) =>
//       onUploadProgress(progress.loaded / progress.total),
//   });
// };

export default {
  addMemory,
  getMemories,
};
