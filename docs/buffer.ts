function staticAllocation() {
  const e = Buffer.alloc(10);
  return e;
}

function stringAllocation() {
  const e = Buffer.from("hello world");
  return e;
}

function slicingAStringFromaBufferData(data) {
  const e = data.slice(0,3);
  return e;
}

function sumOfTwoBuffers(e1, e2) {
  const e = Buffer.concat([e1, e2]);
  return e;
}

export default function BufferTest() {
  console.log("Allocating a bytes fixed size buffer:\n");
  console.log(staticAllocation());
  console.log("Creationg a buffer from a string:\n");
  console.log(staticAllocation());
  console.log("Slicing a string from existing buffer:\n");
  console.log(slicingAStringFromaBufferData(stringAllocation().toString()));
  console.log("Concatenation of two buffers");
  const e1 = Buffer.from("hello");
  const e2 = Buffer.from(" world");
  console.log(sumOfTwoBuffers(e1, e2).toString());
}
