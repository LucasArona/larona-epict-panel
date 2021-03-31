import { Field, Vector } from '@grafana/data';

export function getLastNotNullValue(fields: Field<any, Vector<any>> | undefined, decimals: number) {
  let retVal = 'N/A';
  let lastNotNullValueIndex = fields?.values.length;
  if (lastNotNullValueIndex) {
    while (lastNotNullValueIndex-- && fields?.values.get(lastNotNullValueIndex) == null) {} //Find the last non-null value
    if (lastNotNullValueIndex !== -1) {
      // If we only have null values, index = -1
      retVal = fields?.values
        .get(lastNotNullValueIndex)
        .toFixed(decimals)
        .toString();
    }
  }
  return retVal;
}
