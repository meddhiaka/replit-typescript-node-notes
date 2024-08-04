export default function dateTest() {
  const nowDate = new Date();
  console.log("real time date: \n");
  console.log(nowDate);

  console.log("real time timestamp:\n");
  console.log(nowDate.getTime());

  console.log("initial date with string method:\n");
  const customDate = new Date("December 29 2001 14:30");
  console.log(customDate);

  console.log("initial date with params method:\n");
  const customDateProps = new Date(2001, 11, 29, 14, 30, 2);
  console.log(customDateProps);

  console.log("Getting the seconds of the custom props date: \n");
  const seconds = customDateProps.getSeconds();
  console.log(seconds);
}
