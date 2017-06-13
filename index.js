module.exports = (params) => {
  // Total container width
  const containerWidth = params.containerWidth;
  // Left padding
  const left = params.left || 15;
  // Right padding 
  const right = params.right || 15;
  // Spaces between items
  const interItem = params.interItem || 15;
  // Ideal number of columns
  const idealColumns = params.idealColumns || 2;
  // Ideal container width
  const idealContainerWidth = params.idealContainerWidth || 320; // iPhone 4s width
  // Stratety to resolve decimal amount of columns
  const roundDown = params.roundDown === undefined ? true : params.roundDown;

  // | l x i x i x r |
  // |------ w ------|
  // l => left
  // x => column width
  // i => inter item
  // r => right
  // w => container width
  // number of inter item is one less than columns
  // calculates | x i |
  const idealColumnWidthPlusInterItem = (idealContainerWidth - left - right + interItem) / idealColumns;

  // This might be like 3.5
  let realityColumns = (containerWidth - left - right + interItem) / idealColumnWidthPlusInterItem;

  // But it has to be a whole number sigh... 
  realityColumns = roundDown ? Math.floor(realityColumns) : Math.ceil(realityColumns);

  // Calc column width
  const realityColumnWidth = (containerWidth - left - right + interItem) / realityColumns - interItem;

  // Round down for whole pixels, this should reduce occurances of rounding errors
  return {
    columnWidth: Math.floor(realityColumnWidth),
    columns: realityColumns
  }
};
