async function pr1(e: number) {
  return new Promise((resolve) => {
    e = e + 10;
    resolve(e);
  });
}

async function pr2(e: number) {
  return new Promise((resolve) => {
    e = e * 2;
    resolve(e);
  });
}

export default async function promises() {
  let x: number = 10;
  let res: number = 0;

  const e1 = await pr1(x);
  const e2 = await pr2(e1 as number);

  res = e2 as number;

  console.log(res);
}
