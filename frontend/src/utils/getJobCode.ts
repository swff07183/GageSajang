const getJobCode = (mainCategory: number, subCategory: number) =>
  `CS${mainCategory}000${subCategory.toString().padStart(2, '0')}`;

export default getJobCode;
