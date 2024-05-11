function detectType(val: number | string) {
  if (typeof val === "string") return val.toLowerCase();

  return val + 4;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide id");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!
  // Don't do this
  // Keep Reading
  // !!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "string") console.log(strs);
    else if (typeof strs === "object") for (const s of strs) console.log(s);
  }
}
