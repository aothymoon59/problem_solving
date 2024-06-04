const intersection = (nums1, nums2) => {
  let smArr = [...nums1];
  let lgArr = [...nums2];
  let res = [];
  if (nums1?.length > nums2?.length) {
    smArr = [...nums2];
    lgArr = [...nums1];
  }

  for (let i = 0; i < smArr.length; i++) {
    if (lgArr.includes(smArr[i])) {
      res.push(smArr[i]);
    }
  }

  return [...new Set(res)];
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
