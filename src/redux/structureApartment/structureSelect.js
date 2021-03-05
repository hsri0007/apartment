import { createSelector } from "reselect";

const selectStructure = (state) => state.structureApartment;

console.log(selectStructure);

export const selectStructureData = createSelector(
  selectStructure,
  (structureApartment) => structureApartment
);

console.log(selectStructureData);
